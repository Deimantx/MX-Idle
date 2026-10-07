import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import type { ItemId } from '../../game/types/gameTypes';
import { GameItemFrame } from '../../ui/game-v2/GameKit';
import { ITEMS } from '../../game/content/items/itemRegistry';
import type { GameFeedbackEvent } from './feedback.types';
import { rewardScreen } from './gameFeelProfiles';

type RewardGroup = { id:number; itemId:ItemId; amount:number; source:string; screen:string; rare:boolean };
type Flight = RewardGroup & { fromX:number; fromY:number; dx:number; dy:number; duration:number };

function sourceAnchor(group: RewardGroup, currentScreen: string): Element | null {
  if (currentScreen === 'Bank') return document.querySelector(`[data-bank-item="${group.itemId}"]`);
  if (group.screen !== currentScreen) return null;
  const screen = group.screen;
  const selectors: Record<string,string> = {
    Mining:'[data-feedback-anchor="Mining"]', Smithing:'[data-feedback-anchor="Smithing"]',
    Fishing:'[data-feedback-anchor="Fishing"]', Cooking:'[data-feedback-anchor="Cooking"]', Combat:'[data-feedback-anchor="Combat"]',
  };
  return document.querySelector(selectors[screen] ?? `[data-feedback-screen="${screen}"]`);
}

export function RewardTrajectoryLayer({ events, screen, enabled, reducedMotion }: { events:GameFeedbackEvent[]; screen:string; enabled:boolean; reducedMotion:boolean }) {
  const [flights,setFlights]=useState<Flight[]>([]);
  const seen=useRef(0), pending=useRef(new Map<string,RewardGroup>()), flushTimers=useRef(new Map<string,number>()), removeTimers=useRef(new Map<number,number>());
  useEffect(()=>{
    const fresh=events.filter((event):event is Extract<GameFeedbackEvent,{type:'item'}>=>event.type==='item'&&event.id>seen.current);
    if(!events.length)return;
    seen.current=Math.max(seen.current,...events.map(event=>event.id));
    if(!enabled||reducedMotion)return;
    for(const event of fresh){
      const originScreen=rewardScreen(event.itemId,event.source);
      if(!originScreen)continue;
      const key=`${event.itemId}|${event.source}`;
      const previous=pending.current.get(key);
      pending.current.set(key,previous?{...previous,id:event.id,amount:previous.amount+event.amount}:{id:event.id,itemId:event.itemId,amount:event.amount,source:event.source,screen:originScreen,rare:ITEMS[event.itemId]?.rarity==='Rare'});
      window.clearTimeout(flushTimers.current.get(key));
      flushTimers.current.set(key,window.setTimeout(()=>{
        flushTimers.current.delete(key);
        const group=pending.current.get(key); pending.current.delete(key);
        if(!group)return;
        const origin=sourceAnchor(group,screen), target=document.querySelector('[data-reward-anchor]');
        if(!origin||!target)return;
        const from=origin.getBoundingClientRect(), to=target.getBoundingClientRect();
        const duration=group.rare?620:370;
        const flight:Flight={...group,fromX:from.left+from.width/2,fromY:from.top+from.height/2,dx:to.left+to.width/2-(from.left+from.width/2),dy:to.top-12-(from.top+from.height/2),duration};
        setFlights(current=>[...current,flight].slice(-4));
        removeTimers.current.set(group.id,window.setTimeout(()=>{removeTimers.current.delete(group.id);setFlights(current=>current.filter(entry=>entry.id!==group.id));},duration));
      },360));
    }
  },[events,screen,enabled,reducedMotion]);
  useEffect(()=>()=>{
    for(const timer of flushTimers.current.values())window.clearTimeout(timer);
    for(const timer of removeTimers.current.values())window.clearTimeout(timer);
    flushTimers.current.clear();removeTimers.current.clear();pending.current.clear();
  },[]);
  const root=document.getElementById('overlay-root')??document.body;
  return <>{flights.map(flight=>createPortal(<span key={flight.id} className={`reward-trajectory ${flight.screen.toLowerCase()} ${flight.rare?'rare':''}`} aria-hidden="true" style={{left:flight.fromX,top:flight.fromY,'--reward-x':`${flight.dx}px`,'--reward-y':`${flight.dy}px`,'--reward-duration':`${flight.duration}ms`} as CSSProperties}>
    <GameItemFrame id={flight.itemId} size="compact" state={flight.rare?'reward':'normal'} count={`+${flight.amount}`}/>
  </span>,root,`reward-flight-${flight.id}`))}</>;
}

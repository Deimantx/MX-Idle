import React from 'react';
import { createRoot } from 'react-dom/client';
import { GameScreen } from './screens/GameScreen';
import './styles.css';
import './map-overrides.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><GameScreen /></React.StrictMode>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBootstrap } from './app/AppBootstrap';
import { applyAppSettings, loadAppSettings } from './game/persistence/settingsStorage';
import './styles/tokens.css';
import './styles/global.css';
import './ui/primitives.css';
import './features/professions/mining/mining.css';
import './features/professions/smithing/smithing.css';
import './features/professions/profession-screens.css';
import './features/equipment/equipment.css';
import './features/combat/combat.css';
import './features/bank/bank.css';
import './features/onboarding/onboarding.css';
import './ui/overlays/overlays.css';
import './features/settings/settings.css';
import './features/devtools/devtools.css';
import './styles/responsive.css';
import './features/profiles/profiles.css';

const initialSettings = loadAppSettings();
applyAppSettings(initialSettings);

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><AppBootstrap initialSettings={initialSettings} /></React.StrictMode>);

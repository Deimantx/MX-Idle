import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/tokens.css';
import './styles/global.css';
import './ui/primitives.css';
import './features/professions/mining/mining.css';
import './features/professions/smithing/smithing.css';
import './features/equipment/equipment.css';
import './features/combat/combat.css';
import './features/bank/bank.css';
import './features/onboarding/onboarding.css';
import './ui/overlays/overlays.css';
import './features/settings/settings.css';
import './features/devtools/devtools.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);

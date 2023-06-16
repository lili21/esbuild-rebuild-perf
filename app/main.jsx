import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app.jsx';

const root = createRoot(document.getElementById('root'));

root.render((
  <StrictMode>
    <App />
  </StrictMode>
));

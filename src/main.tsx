import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { CookieConsentProvider } from "./contexts/CookieConsentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </LanguageProvider>
  </StrictMode>,
);

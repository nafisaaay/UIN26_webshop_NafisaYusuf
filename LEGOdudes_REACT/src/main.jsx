import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' 

///husk å sette opp browserroute på main hver gang for å få brukt router 
/// kan ikke brukes kun ved å laste det ned 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

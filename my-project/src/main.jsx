import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import './index.css'


function renderComponent(elementId, Component) {
  const element = document.getElementById(elementId);

  if (element) {
    ReactDOM.createRoot(element).render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>,
    );
  }
}

renderComponent('root', App);
renderComponent('shop', Shop);

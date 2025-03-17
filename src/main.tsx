import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import Routes from "@/routes"
import {BrowserRouter} from "react-router"
import {store, persistor} from "@/redux/store"
import {PersistGate} from "redux-persist/integration/react"
import App from "@/containers/App"
import React from 'react'
import '@ant-design/v5-patch-for-react-19'; 
import "@/assets/css/main.css"

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)

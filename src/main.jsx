import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router'
import {
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>,
  </StrictMode>,
)

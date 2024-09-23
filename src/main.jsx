import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import router from './lib/routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

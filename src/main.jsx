import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import router from './lib/routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from '@/hooks/useUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)

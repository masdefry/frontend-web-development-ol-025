import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './App.tsx'
import ProfilePage from './pages/profile/page.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', 
    Component: HomePage
  }, 
  {
    path: '/profile', 
    Component: ProfilePage
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

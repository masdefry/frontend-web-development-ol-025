import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './App.tsx';
import ProfilePage from './pages/profile/page.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TailwindPage from './pages/tailwindcss/page.tsx';
import UseRefPage from './pages/react-hooks/use-ref/page.tsx';
import UseStatePage from './pages/react-hooks/use-state/page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/profile',
    Component: ProfilePage,
  },
  {
    path: '/tailwind',
    Component: TailwindPage,
  },
  {
    path: '/react-hooks/useref',
    Component: UseRefPage,
  },
  {
    path: '/react-hooks/usestate',
    Component: UseStatePage,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

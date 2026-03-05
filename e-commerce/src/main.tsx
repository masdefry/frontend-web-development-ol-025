import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateProductPage from './pages/product/create/page.tsx';
import ProfilePage from './pages/profile/page.tsx';
import RootLayout from './components/RootLayout.tsx';
import CounterPage from './pages/counter/page.tsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        Component: App,
      },
      {
        path: '/products/create',
        Component: CreateProductPage,
      },
      {
        path: '/profile',
        Component: ProfilePage,
      },
      {
        path: '/counter',
        Component: CounterPage,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

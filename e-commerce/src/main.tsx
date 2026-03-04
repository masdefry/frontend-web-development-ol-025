import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateProductPage from './pages/product/create/page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/products/create',
    Component: CreateProductPage,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

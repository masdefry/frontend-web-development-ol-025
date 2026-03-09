import { Outlet } from 'react-router-dom';
import Navbar from './product/Navbar';
import { ToastContainer } from 'react-toastify';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

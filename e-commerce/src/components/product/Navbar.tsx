import { LuShoppingCart } from 'react-icons/lu';
import { RiArrowDropRightLine } from 'react-icons/ri';
import useTotalCartStore from '../../stores/useTotalCartStore';
import useAuthStore from '../../stores/useAuthStore';

export default function Navbar(props: any) {
  const { totalCarts } = useTotalCartStore();
  const { email } = useAuthStore();

  return (
    <nav>
      {/* Top */}
      <div className='flex items-center justify-between p-2 bg-gray-100'>
        <span className='flex items-center'>
          <span className='font-bold mr-1'>Gratis Ongkir + Banyak Promo</span>
          belanja di aplikasi <RiArrowDropRightLine className='text-3xl' />
        </span>
        <div className='flex items-center gap-3 text-gray-500 font-light'>
          <span>Tentang Tokopedia</span>
          <span>Mulai Berjualan</span>
          <span>Promo</span>
          <span>Tokopedia Care</span>
        </div>
      </div>
      {/* Bottom */}
      <div className='flex justify-between items-center gap-5 p-3'>
        <img src='logo.svg' />
        <span>Kategori</span>
        <label className='input w-full'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>
          <input type='search' className='grow' placeholder='Search' />
        </label>
        <LuShoppingCart className='text-3xl' />
        <span className='bg-red-500 text-white rounded-full px-2'>
          {totalCarts}
        </span>
        <div className='flex items-center gap-1'>
          {email !== '' ? (
            email
          ) : (
            <>
              <button className='btn btn-active btn-success'>Login</button>
              <button className='btn btn-active btn-success'>Register</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

import { FaMoon } from 'react-icons/fa';

export default function App() {
  return (
    <div className='min-h-screen bg-gray-200'>
      {/* Section-01: Hero/Banner */}
      <div className='relative bg-red-100 h-20 md:h-60'>
        <img src='hero-background.png' className='w-full h-full object-cover' />
        <div className='bg-purple-500 w-full h-10 absolute top-0 h-full opacity-32'></div>
        <div className='flex flex-col items-center gap-10 absolute top-10 w-full'>
          <div className='flex items-center justify-between gap-3 w-xl text-white'>
            <h1 className='text-3xl font-bold'>T O D O</h1>
            <FaMoon className='text-2xl' />
          </div>
          {/* Section-02: Todos */}
          <label className='input w-xl'>
            <input
              type='radio'
              name='radio-1'
              className='radio'
              defaultChecked
            />
            <input type='search' required placeholder='Search' />
          </label>

          {/* Section-03: Todo List */}
          <div className='bg-white rounded-md w-xl p-5 flex flex-col gap-3'>
            <div className='flex items-center gap-2 border-b border-gray-300 p-2'>
              <input
                type='radio'
                name='radio-1'
                className='radio'
                defaultChecked
              />
              <h2>Nobar Timnas Indonesia Fifa Series</h2>
            </div>
            <div className='flex justify-between items-center text-sm text-gray-400'>
              <h3>5 items left</h3>
              <div className='flex items-center gap-3'>
                <h3>All</h3>
                <h3>Items</h3>
                <h3>Completed</h3>
              </div>
              <h3>Clear Completed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

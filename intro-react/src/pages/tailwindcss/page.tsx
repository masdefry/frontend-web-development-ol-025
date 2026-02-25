export default function TailwindPage() {
  return (
    <>
      {/* Font */}
      {/* Font-Size */}
      <h1 className='text-xs'>Purwadhika School</h1>
      <h2 className='text-sm'>Purwadhika School</h2>
      <h3 className='text-md'>Purwadhika School</h3>
      <h1 className='text-xl'>Purwadhika School</h1>
      <h1 className='text-2xl'>Purwadhika School</h1>
      <h1 className='text-3xl'>Purwadhika School</h1>
      <h1 className='text-[50px]'>Purwadhika School</h1>

      {/* Font Color */}
      <h1 className='text-rose-50'>Javascript</h1>
      <h1 className='text-rose-100'>Javascript</h1>
      <h1 className='text-rose-200'>Javascript</h1>
      <h1 className='text-rose-300'>Javascript</h1>
      <h1 className='text-rose-400'>Javascript</h1>
      <h1 className='text-[#134E8E]'>Javascript</h1>

      {/* Font Styling */}
      <h1 className='font-light'>Typescript</h1>
      <h1 className='font-normal'>Typescript</h1>
      <h1 className='font-medium'>Typescript</h1>
      <h1 className='font-semibold'>Typescript</h1>
      <h1 className='font-bold'>Typescript</h1>
      <h1 className='italic'>Typescript</h1>
      <h1 className='underline'>Typescript</h1>

      {/* Background Color */}
      <div className='w-32 h-32 bg-blue-100'>Box-01</div>
      <div className='w-32 h-32 bg-blue-300'>Box-01</div>
      <div className='w-32 h-32 bg-blue-600'>Box-01</div>

      {/* Grid */}
      <div className='grid grid-cols-3 mt-10 mb-10'>
        <div className='bg-red-100'>1</div>
        <div className='bg-red-200 col-span-2'>2</div>
        <div className='bg-red-300 col-end-4'>3</div>
      </div>

      <div className='grid grid-cols-10 my-10'>
        <div className='bg-red-100 col-start-4 col-end-7'>01</div>
      </div>

      {/* Flexbox */}
      <div className='w-screen h-screen flex bg-yellow-100 justify-center items-center'>
        <h1 className='text-yellow-600 text-3xl'>Hello, World!</h1>
      </div>

      {/* Responsive */}
      <h1 className='text-5xl bg-gray-100 text-red-200 md:text-red-400 lg:text-red-600 lg:bg-gray-300 xl:text-red-800'>
        React.js
      </h1>
      <h1 className='text-5xl max-lg:text-red-600 max-md:text-red-400 max-sm:text-red-200'>
        Next.js
      </h1>
    </>
  );
}

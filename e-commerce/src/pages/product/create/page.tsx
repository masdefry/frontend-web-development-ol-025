import { useRef } from 'react';

export default function CreateProductPage() {
  const inputProduct = useRef<HTMLInputElement>(null);

  const onHandleSubmit = (event: any) => {
    event?.preventDefault(); // Menghindari supaya form tidak me-refresh halaman

    // Local Storage
    const product = inputProduct?.current?.value;

    if (product)
      localStorage.setItem(
        'product',
        JSON.stringify({ name: inputProduct?.current?.value }),
      );

    alert('Save product successful');
  };

  const onHandleDeleteStorage = () => {
    localStorage.removeItem('product');
  };

  return (
    <>
      <div className='p-10'>
        <h1 className='text-2xl font-bold text-green-500'>Create Product</h1>
        <form onSubmit={onHandleSubmit} className='mt-3'>
          <input ref={inputProduct} type='text' className='input' />
          <button type='submit' className='btn bg-green-500 text-white'>
            Save Product
          </button>
          <button
            type='button'
            onClick={onHandleDeleteStorage}
            className='btn bg-red-600 text-white'
          >
            Delete
          </button>
        </form>
      </div>
    </>
  );
}

import { useFormik } from 'formik';
import { createProductSchema } from '../../../features/product/create/schemas/createProductSchema';
import axios from 'axios';
import { toast } from 'react-toastify';

type Product = {
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
};
export default function CreateProductPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      stock: 0,
      imageUrl: '',
    },
    validationSchema: createProductSchema,
    onSubmit: async ({ name, price, stock, imageUrl }: Product) => {
      // get  : Retriev data
      // post : Save data
      // put  : Update data
      // delete : Delete data
      await axios.post(
        'https://api.backendless.com/FE9C7CE4-1812-45EA-89E0-E802F281EA22/63B92181-93D4-46CD-B088-4A13AE8857E6/data/Products',
        {
          name,
          price: Number(price),
          stock: Number(stock),
          imageUrl,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      toast.success('Create new product successfully!')
    },
  });

  return (
    <>
      <div className='py-10 flex justify-center'>
        <div className='w-3xl'>
          <h1 className='text-4xl font-bold text-green-800'>
            Form Create Product
          </h1>
          <form onSubmit={formik?.handleSubmit} className='mt-10'>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Product Name</legend>
              <input
                name='name'
                onChange={formik?.handleChange}
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>{formik?.errors?.name}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Product Price</legend>
              <input
                name='price'
                onChange={formik?.handleChange}
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>{formik?.errors?.price}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Product Stock</legend>
              <input
                name='stock'
                onChange={formik?.handleChange}
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>{formik?.errors?.stock}</p>
            </fieldset>
            <fieldset className='fieldset '>
              <legend className='fieldset-legend'>Product Image URL</legend>
              <input
                name='imageUrl'
                onChange={formik?.handleChange}
                type='text'
                className='input w-full'
                placeholder='Type here'
              />
              <p className='label'>{formik?.errors?.imageUrl}</p>
            </fieldset>
            <button
              type='submit'
              className='btn bg-green-800 mt-3 text-white w-full'
            >
              Save Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

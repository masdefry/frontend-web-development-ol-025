import * as yup from 'yup'; 

export const createProductSchema = yup?.object().shape({
    name: yup.string().required('Product name is required').max(100, 'Product name have maximum 100 characters'), 
    price: yup.number().required('Product price is required').min(100, 'Product price have minimum value is 100'),
    stock: yup.number().required('Product price is required').min(100, 'Product price have minimum value is 100'), 
    imageUrl: yup.string().required('Image URL is required')
})
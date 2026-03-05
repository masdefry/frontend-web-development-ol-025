import { useState } from 'react';
import Navbar from './components/product/Navbar';
import ProductList from './components/product/ProductList';

const products = [
  {
    id: 1,
    name: 'Minyak Sunco 2L Refill',
    price: 40000,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtCAsn4Pltg3IlQq4P7QN6mv4s3wbkMx46A&s',
  },
  {
    id: 2,
    name: 'Pop Mie Ayam Bawang',
    price: 35000,
    imageUrl:
      'https://img.lazcdn.com/g/ff/kf/S570f44385c9d4617ab31a27b1e1eac48y.jpg_720x720q80.jpg',
  },
];
function App() {
  return (
    <>
      {/* Product List */}
      <ProductList _products={products} />
    </>
  );
}

export default App;

import axios from 'axios';
import ProductList from './components/product/ProductList';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState<any[]>([]);

  const onGetProducts = async () => {
    try {
      const res = await axios.get(
        'https://api.backendless.com/FE9C7CE4-1812-45EA-89E0-E802F281EA22/63B92181-93D4-46CD-B088-4A13AE8857E6/data/Products?pageSize=100&offset=0',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setProducts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useEffect')
    onGetProducts();
  }, []);

  return (
    <>
    {console.log('render element')}
      {/* Product List */}
      <ProductList _products={products} />
    </>
  );
}

export default App;

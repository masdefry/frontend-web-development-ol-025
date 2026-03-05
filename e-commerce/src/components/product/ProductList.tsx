import ProductCard from './ProductCard';

export default function ProductList(props: any) {
  return (
    <div className='grid grid-cols-4 px-32 py-20 gap-5'>
      {props?._products?.map((product: any) => {
        return <ProductCard _product={product} />;
      })}
    </div>
  );
}

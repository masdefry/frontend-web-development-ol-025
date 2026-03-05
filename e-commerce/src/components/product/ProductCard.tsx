import useTotalCartStore from '../../stores/useTotalCartStore';

export default function ProductCard(props: any) {
  const { setTotalCarts } = useTotalCartStore();

  return (
    <div
      className='card bg-base-100 col-span-1 shadow-sm'
      key={props?._product?.id}
    >
      <div className='w-full h-64'>
        <img
          src={props?._product?.imageUrl}
          alt='Shoes'
          className='w-full h-full object-cover rounded-t-md'
        />
      </div>
      <div className='card-body'>
        <h2 className='text-2xl'>{props?._product?.name}</h2>
        <h3 className='text-sm font-bold'>
          Rp.{props?._product?.price?.toLocaleString('id-ID')}
        </h3>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={setTotalCarts}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

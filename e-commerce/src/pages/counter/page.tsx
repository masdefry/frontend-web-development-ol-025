import useCounterStore from '../../stores/useCounterStore';

export default function CounterPage() {
  const { counter, increment, decrement } = useCounterStore();

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold'>Counter with Zustand</h1>
      <button
        onClick={decrement}
        className='px-1 bg-green-600 text-white rounded-md'
      >
        -
      </button>

      <h2 className='font-bold text-xl'>{counter}</h2>
      <button
        onClick={increment}
        className='px-1 bg-green-600 text-white rounded-md'
      >
        +
      </button>
    </div>
  );
}

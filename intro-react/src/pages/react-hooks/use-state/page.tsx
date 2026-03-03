import { useState } from 'react';

// export default function UseStatePage() {
//   let [counter, setCounter] = useState<number>(0);

//   const onHandleIncrement = () => {
//     setCounter(counter + 1)
//   }

//   return (
//     <>
//       <h1>Hooks: Usestate</h1>
//       <h2 className='ml-3'>{counter}</h2>
//       <button onClick={onHandleIncrement}>Increment</button>
//     </>
//   );
// }

// export default function UseStatePage() {
//   const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

//   return (
//     <>
//       <h1 className='text-2xl font-bold text-purple-500'>Form Login</h1>
//       <form>
//         <input
//           type='text'
//           placeholder='Type your email'
//           className='border border-purple-700 p-1 rounded-md'
//         />
//         <div className='flex items-center gap-3 mt-3'>
//           <input
//             type={isShowPassword === true ? 'text' : 'password'}
//             placeholder='Type your password'
//             className='border border-purple-700 p-1 rounded-md'
//           />
//           <p
//             className='text-xs text-blue-500'
//             onClick={() => setIsShowPassword(!isShowPassword)}
//           >
//             {isShowPassword === true ? 'Hidden Passord' : 'Show Password'}
//           </p>
//         </div>
//         <button
//           type='submit'
//           className='bg-purple-700 text-white p-3 rounded-md mt-3'
//         >
//           Login
//         </button>
//       </form>
//     </>
//   );
// }

// export default function UseStatePage() {
//   const [text, setText] = useState<string>('');

//   return (
//     <>
//       <div className='p-10'>
//         <h1 className='text-2xl font-bold text-blue-600'>Typing Area</h1>
//         <p className={text?.length > 50 ? 'text-red-500' : 'text-blue-500'}>
//           {text}
//         </p>
//         <textarea
//           onChange={(e) => setText(e?.target?.value)}
//           className='border border-blue-600 p-1 rounded-md mt-3'
//         />
//       </div>
//     </>
//   );
// }

const imagesProduct = [
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full01_e7bc2819.jpg',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full02_62e6c0cd.jpg',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/89/MTA-141123338/nike_sepatu_futsal_nike_tiempo_legend_10_academy_ic_original_dv4341_040_full04_fad03b43.jpg',
  'https://media.istockphoto.com/id/1443562748/id/foto/kucing-jahe-lucu.jpg?s=612x612&w=0&k=20&c=g--RaRzUgk83osyJGx88ZtoChTk3VzP8n86EQHvc7Ko=',
];

export default function UseStatePage() {
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <>
      <div className='p-10'>
        <div className='border border-gray-300 rounded-md w-[250px] h-[250px] flex justify-center items-center'>
          {imageUrl === '' ? (
            <h2 className='text-xl font-bold'>Image Preview</h2>
          ) : (
            <img src={imageUrl} />
          )}
        </div>
        <div className='flex gap-3'>
          {imagesProduct?.map((item, index) => {
            return (
              <div className='w-20 h-20'>
                <img
                  src={item}
                  onClick={() => setImageUrl(item)}
                  className='max-w-full max-h-full'
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

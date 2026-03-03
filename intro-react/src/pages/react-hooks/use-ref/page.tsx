import { useRef } from 'react';

export default function UseRefPage() {
  const inputEmail = useRef<HTMLInputElement>(null);

  const onHandleSubmitEmail = (e: any) => {
    e.preventDefault();
    console.log(inputEmail?.current?.value);
  };

  return (
    <>
      <h1>Hooks: Useref</h1>
      <form onSubmit={onHandleSubmitEmail}>
        <input ref={inputEmail} type='email' placeholder='Type your email' />
        <button>Submit</button>
      </form>
    </>
  );
}

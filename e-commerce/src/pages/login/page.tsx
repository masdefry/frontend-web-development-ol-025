import { useRef } from 'react';
import useAuthStore from '../../stores/useAuthStore';

export default function LoginPage() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const { setEmail } = useAuthStore();

  const onHandleLogin = (event: any) => {
    event?.preventDefault();

    const email = inputEmail?.current?.value;
    const password = inputPassword?.current?.value;

    if (email) setEmail(email);
  };

  return (
    <>
      <div>
        <form
          onSubmit={onHandleLogin}
          className='flex flex-col items-center py-10'
        >
          <fieldset className='fieldset w-90'>
            <legend className='fieldset-legend'>Email</legend>
            <input
              ref={inputEmail}
              id='email'
              name='email'
              type='text'
              className='input'
              placeholder='Type your email'
            />
          </fieldset>
          <fieldset className='fieldset w-90'>
            <legend className='fieldset-legend'>Password</legend>
            <input
              ref={inputPassword}
              id='password'
              name='password'
              type='password'
              className='input'
              placeholder='Type your password'
            />
          </fieldset>
          <button className='btn bg-green-700 text-white'>Login</button>
        </form>
      </div>
    </>
  );
}

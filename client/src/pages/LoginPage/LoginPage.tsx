import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from './loginSlice';
import InputField from '../../components/Shared/InputField';

interface IFormFields {
  email: string;
  password: string;
}

const LoginPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<IFormFields>({
    email: '',
    password: '',
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string | null>(null);

  const { email, password } = formData;

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    const response: any = await dispatch(loginRequest({ email, password }));
    if (!loginRequest.fulfilled.match(response)) {
      setLoginError(response.payload.message);
    }
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='login-page'>
      <div className='card card--bg-dark'>
        <div className='card__body'>
          <h2>Log In</h2>
          {loginError && <div className='alert alert__error'>{loginError}</div>}
          <form onSubmit={handleSubmit}>
            <div className='form-fields-wrapper'>
              <InputField
                name='email'
                value={email}
                placeholder='Email'
                onChange={onChange}
              />
            </div>
            <div className='form-fields-wrapper'>
              <InputField
                type='password'
                name='password'
                value={password}
                placeholder='Password'
                onChange={onChange}
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitDisabled}
              className='rot-button rot-button--size-large'
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

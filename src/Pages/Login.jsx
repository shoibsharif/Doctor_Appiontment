import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('sign up');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form 
      onSubmit={onSubmitHandler} 
      className="min-h-[80vh] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {state === 'sign up' ? 'Create Account' : 'Log In'}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please {state === 'sign up' ? 'sign up' : 'log in'} to book an appointment
        </p>
        {state === 'sign up' && (
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)} 
              value={name} 
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary transition"
        >
          {state === 'sign up' ? 'Create Account' : 'Log In'}
        </button>
        <p 
          className="text-center  cursor-pointer mt-4"
          onClick={() => setState(state === 'sign up' ? 'log in' : 'sign up')}
        >
          {state === 'sign up' ? <p>Create a new account to <span className='text-blue-400 underline'>Log in here</span></p> : <p>'Already have an account? <span className='text-blue-400'>Sin up</span></p>}
        </p>
      </div>
    </form>
  );
};

export default Login;

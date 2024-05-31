import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default Signup;

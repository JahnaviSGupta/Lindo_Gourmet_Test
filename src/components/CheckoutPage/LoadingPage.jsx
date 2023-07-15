import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 3000;

    const timer = setTimeout(() => {
      navigate('/order');
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="justify-center h-[100vh] w-full">
        <div className="text-center">
        <div className='h-[50vh]'></div>
            <h1 className='font-700'>Your Order's being processed.</h1>
            <p className='font-300 text-[15px] text-qgray'>If you're not automatically redirected, refresh this page.</p>
        </div>
    </div>
  );
}
import React from 'react'
const Loader = ({ color }) => {
  const encodedColor = encodeURIComponent(color || 'white');

  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150'><path fill='none' stroke='${encodedColor}' stroke-width='15' stroke-linecap='round' stroke-dasharray='300 385' stroke-dashoffset='0' d='M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z'><animate attributeName='stroke-dashoffset' calcMode='spline' dur='2' values='685;-685' keySplines='0 0 1 1' repeatCount='indefinite'></animate></path></svg>")`,
        backgroundRepeat: 'no-repeat',
        width: '7dvw', // Adjust the width and height as needed
        height: '7dvh',
      }}
    ></div>
  );
};

const loading = () => {
  return (
    <div className='min-w-dvw min-h-dvh bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 flex items-center justify-center'><Loader /></div>
  )
}

export default loading;
import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <ColorRing
        type='ColorRing'
        colors={['#55D6BE', '#ACFCD9', '#7D5BA6', '#DDDDDD', '#FC6471']}
        height={50}
        width={200}
        className='m-5'
      />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner
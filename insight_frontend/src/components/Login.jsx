import React from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import insightVideo from '../assets/insightvideo.mp4';
import insightLogoWhite from '../assets/insightlogowhite.png';

import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    let userObj = jwt_decode(response.credential)
    localStorage.setItem('user', JSON.stringify(userObj))
    const { name, sub, picture } = userObj;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true })
    });
  };

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={insightVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={insightLogoWhite} width='160px' alt="logo" />
          </div>

          <div id="googleSignInDiv" className='shadow-2xl'>
            <GoogleLogin 
              onSuccess={(codeResponse) => responseGoogle(codeResponse)}
              onError={() => console.log('Login failed')}
              size='large'
              theme='outline'
              useOneTap
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
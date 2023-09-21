import React from 'react'
import { Hamburguer } from './Hamburguer'
import LogoGitHub from './LogoGitHub';
export default function HeaderProfile({name}) {
  
  return (
    <>
    <div className='HeaderProile w-full h-[50px] flex  relative py-1' >
      <div className='flex  p-1 relative'>
        <Hamburguer/>
        <LogoGitHub/>
      </div>
            
    </div>

    </>
  )
}

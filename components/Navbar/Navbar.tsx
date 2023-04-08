import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='mobile:mt-6 mobile:mb-4 lg:mb-0 lg:mt-10'>
        <ul className=' font-melodrama justify-center items-center
        mobile:flex mobile:text-xl mobile:gap-10  

        md:flex md:gap-16 md:justify-center md:text-2xl
        
        lg:flex lg:gap-16  lg:text-4xl '>
            <li className='hoverTransition'>
                <Link href='/'>Showcase</Link>
            </li>
            <li className='hoverTransition'>
                <Link href='/'>Pricing</Link>
            </li>
            <li className='hoverTransition'>
                <Link href='/'>My account</Link>
            </li>
        </ul>
    </div>
  )
}

import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='mt-10'>
        <ul className=' font-melodrama lg:flex lg:gap-16 lg:justify-center lg:items-center lg:text-4xl '>
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

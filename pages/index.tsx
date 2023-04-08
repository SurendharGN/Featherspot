
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import { useState } from 'react'
import React from 'react';
import Image from 'next/image';

import { Navbar } from '@/components/Navbar/Navbar';

import mountain from '../public/mountain.jpg';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
   

   
    

  return (
    <div className=' font-melodrama text-white '>

        <div className='  justify-center w-screen  '>
            <div className=''>
                <Navbar/>

                <div className=' w-3/4  h-px bg-white translate-y-10 translate-x-48'></div>

            <div className='lg:flex-col lg:flex lg:justify-center lg:items-center lg:align-middle'>
                 <h1 className='text-[14rem]'>Featherspot</h1>
            <p className='text-5xl'>A Design-to-Prototype code generator</p>

            <div className='cursor-pointer flex justify-center items-center hoverTransition bg-white lg:w-48 lg:h-14 lg:my-14  '>
                <button className='text-black text-2xl '>Authenticate</button>
            </div>

            <p className='text-xl'>*Note: Featherspot is a concept idea, it is under development.</p>
            </div>
            </div>
            

           
            <Image style={{width:'100%', height: '100%', position:'absolute',top:'0'}}  src={mountain} alt='background' className='bg-[#49504C] -z-10'
    ></Image>
   
        </div>
        
        
    </div>
  )
}

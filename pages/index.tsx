
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

        <div className='justify-center lg:w-screen'>
            <div className=''>
                <Navbar/>

                <div className='mobile:translate-x-16 w-3/4  h-px bg-white lg:translate-y-10 lg:translate-x-48'></div>

            <div className=' flex-col flex justify-center items-center align-middle lg:gap-10 '>
                 <h1 className='
                 mobile:text-[4rem] 
                 
                 md:text-[10rem] 
                 
                 lg:text-[14rem] lg:-translate-y-36 lg:absolute lg:top-[16rem] '>Featherspot</h1>
            <p className='
            mobile:text-xl

            lg:text-5xl lg:absolute lg:top-[24rem] '>A Design-to-Prototype code generator</p>

            <div className='cursor-pointer flex justify-center items-center hoverTransition bg-white 
           
            mobile:translate-y-24

            lg:translate-y-0
            w-48 h-14 lg:my-14 lg:absolute lg:top-[26rem]  '>
                <Link href='/' className='text-black text-2xl '>Authenticate</Link>
            </div>

            <p className='mobile:translate-y-28
             font-bold text-center

            lg:translate-y-0 text-xl lg:absolute lg:top-[36rem] '>*Note: Featherspot is a concept idea, it is under development.</p>
            </div>
            </div>
            

           
            <Image style={{width:'100%', height: '100%', position:'absolute',top:'0'}}  src={mountain} alt='background' className='-z-10'
    ></Image>
   
        </div>
        
        
    </div>
  )
}

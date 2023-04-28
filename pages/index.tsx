import Head from 'next/head';
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

    <div className=' font-melodrama '>
        <Head>
            <title>Featherspot: design to code</title>
            <meta name="keywords" content="code generator,design to code"></meta>
            <meta name="description" content="design to code generator"></meta>
            <meta name="author" content="Surendhar"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

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

            <div className='cursor-pointer flex justify-center items-center  bg-white 
           
            
            w-48 h-14  md:absolute   '>
                <Link href='/Authenticate' className='text-black hover:scale-x-105 hover:scale-y-105 transition ease-in-out duration-300 text-sm shadow-sm p-1 '>Authenticate</Link>
            </div>

            
            </div>
            </div>
            

           
            
   
        </div>
        
        
    </div>
  )
}

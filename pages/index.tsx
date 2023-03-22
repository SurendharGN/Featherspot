import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import { useState } from 'react'
import { Router,useRouter } from 'next/router';


import React from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const router=useRouter()
    const urlRouter=useRouter()

    const [value,setValue]=useState('')
    
    function sendUrl(){
        urlRouter.push({
            pathname:'/Code',
            query:{value}
        })
    }
  return (
    <>
    
      <header>
       <h1>Featherspot</h1>
      </header>
      <main>
        <h2>Import URL:</h2>
        <input onChange={(event)=>setValue(event.target.value)} placeholder="URL"></input>
        <button onClick={sendUrl}>Import</button>
        
        
        
      </main>
     
      
    </>
  )
}

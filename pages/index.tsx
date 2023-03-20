import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
       <h1>Featherspot</h1>
      </header>
      <main>
        <h2>Import URL:</h2>
        <input placeholder="URL"></input>
        <button>Import</button>
      </main>
     
      
    </>
  )
}

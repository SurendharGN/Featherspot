import React from 'react'
import {useSearchParams} from 'next/navigation'
import {useRouter} from 'next/router'


const figmaId="fsOaVXAaLiSB6pxs91vohx";
const figmaApi="figd_P2QEjM92xOVpiDqQDG4FpCiIPW3v7KFIb8G3P3Rd"

// id, name, type, scrollBehavior, children, backgroundColor, prototypeStartNodeID, flowStartingPoints, prototypeDevice}

const Code = () => {

    const router=useRouter()
    const {
        query:{value}
    }=router

    const props={value}


  return (
    <>
        <header>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>React</h1>
        </header>

        <div>
            {props.value}
        </div>
    </>
  )
}

export const getServerSideProps=async()=>{
    const result=await fetch(`https://api.figma.com/v1/files/${figmaId}`,{
        method: "GET",
        headers:{
            "X-Figma-Token":figmaApi
        }
    })
    const figmaStructure=await result.json()
    const document=figmaStructure.document.children
    
    return {
        props:{document}
    }
}

export default Code
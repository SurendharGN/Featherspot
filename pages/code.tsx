import React from 'react'

import {useRouter} from 'next/router'
import Link from 'next/link';
import axios from 'axios';



const figmaToken='figd_7RQOFQ_3nafYmOanvT1ICmMO5jkyd6hKmTIooqjh'
// id, name, type, scrollBehavior, children, backgroundColor, prototypeStartNodeID, flowStartingPoints, prototypeDevice}

const Code = ({document}: any) => {

    const router=useRouter()
    const {
        query:{value}
    }=router

    const props={value}
    const userToken=
    async()=>{
    const response=await fetch("https://www.figma.com/api/oauth/token?client_id=jqf4nL30juMiPSpgOFQJUT&client_secret=E0mGbu9qZv8h8jHFmqrbeIOg1VktBx&redirect_uri=http://localhost:3001/Code&code=rE0Pexb5SOhIbwPqhJMrlZo6w&grant_type=authorization_code",{
            method:"POST",
            body:"sGMIy3ZdPeVQr28h0nLVVGg2z"
            
        })

        const data= await response.json()
        console.log(data)
        return {data}
        
    }
    

  return (
    <>
        <header>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>React</h1>
        </header>

        <div>
            <p>{props.value}</p>
            {document[0].name}
            
        </div>

        <a href='https://www.figma.com/oauth?client_id=jqf4nL30juMiPSpgOFQJUT&redirect_uri=http://localhost:3001/Code&scope=file_read&state=test&response_type=code' >Authenticate</a>
        <button onClick={userToken}>Token</button>
    </>
  )
}

// axios.post("").then(response=>console.log(response))



export const getServerSideProps=async()=>{
    const result=await fetch(`https://api.figma.com/v1/files/fsOaVXAaLiSB6pxs91vohx`,{
        method: "GET",
        headers:{
            "X-Figma-Token":figmaToken
        }
    })

   
    const figmaStructure=await result.json()
    const document=figmaStructure.document.children
    
    return {
        props:{document}
    }
}




export default Code
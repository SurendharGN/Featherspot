import React from 'react'
import { useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';


const Authenticate = () => {
    
    // Creates a router object to retrive the current URL
    const currentURL=useRouter()

    // access token for retriving user files
    const[userAccessToken,setUserAccessToken]=useState('')

    // Gets the Figma file ID
    const [fileURL,setFileURL]=useState('')

    // Generates an input button when the "generate token" button is clicked
    const [clicked,setClicked]=useState(true)

    // return JSON data in JSX form
    const [figmaDocument,setFigmaDocument]=useState('')


// ***************************************************************
    // Generates a unique token by a POST request to figma oauth
    const generateUserToken=async()=>{

        const clientID=process.env.NEXT_PUBLIC_CLIENT_ID
        const clientSecret=process.env.NEXT_PUBLIC_CLIENT_SECRET

        console.log(clientID)
        console.log(clientSecret)

        const response=await fetch
        (`https://www.figma.com/api/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=http://localhost:3001/Authenticate&code=${userCode}&grant_type=authorization_code`,
        {
            method:"POST",
        })

        const data= await response.json()
        
        setUserAccessToken(data.access_token)
        
    }
// ***************************************************************

    // sets the input tag to be visible
    const showInput=()=>{
        setClicked(clicked)
    }
    
    // Gets the unique file ID
    const fileID=fileURL.split("/")[4]

    // Gets the current URL of the site after aunthentication
    const userCode=currentURL.asPath.slice(19,44)
    

    // Sets a random state for verification
    const userState="test"

//*************************************************************
    // Gets the JSON format of the Figma file
    async function getJSON(){

        

        const result=await fetch
        (`https://api.figma.com/v1/files/${fileID}`,
    {
        method: "GET",
        headers:{
            "Authorization":`Bearer ${userAccessToken}`
        }
    })

        const figmaStructure=await result.json()
        const figmaDocument=figmaStructure.document.children;
        const stringDocument=`"${JSON.stringify(figmaDocument)}"`
        
        setFigmaDocument(stringDocument)
        
//************************************************************* 

}
    return (
        <div className='font-melodrama flex flex-col text-center gap-5 text-sm mt-10'>
            

            <main>
                <button onClick={()=>{showInput();generateUserToken()}} className='shadow-sm w-32 m-auto'>generate token</button>
            </main>

            {/* Authenticates the user */}
            <Link className='shadow-sm w-32 m-auto' href=
            {`https://www.figma.com/oauth?client_id=jqf4nL30juMiPSpgOFQJUT&redirect_uri=http://localhost:3001/Authenticate&scope=file_read&state=test&response_type=code`}
            >Authenticate</Link>

            {clicked && <input className='outline-0 font-sans text-[8px] text-center' onChange={(e)=>setFileURL(e.target.value)} placeholder='URL'/>}
            
            <button className='shadow-sm w-28 m-auto' onClick={getJSON}>click to activate</button>
            
            <hr className='w-3/4 m-auto'></hr>
            <div className='font-sans text-[8px] w-3/4 m-auto flex flex-col'>
                {figmaDocument}
            </div>
        
        
    </div>
    )
}
export default Authenticate
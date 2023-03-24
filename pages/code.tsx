// LEARN ABOUT USEROUTER HOOK

import React from 'react'
import { useState } from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';

// FIGMA JSON properties: id, name, type, scrollBehavior, children, backgroundColor, prototypeStartNodeID, flowStartingPoints, prototypeDevice}

const Code = ({document}: any) => {

    // Creates a router object to retrive the current URL
    const currentURL=useRouter()

    // access token for retriving user files
    const[userAccessToken,setUserAccessToken]=useState('')

    // Gets the Figma file ID
    const [fileURL,setFileURL]=useState('')

    // Generates an input button when the "generate token" button is clicked
    const [clicked,setClicked]=useState(true)


// ***************************************************************
    // Generates a unique token by a POST request to figma oauth
    const generateUserToken=async()=>{

        const clientID=process.env.NEXT_PUBLIC_CLIENT_ID
        const clientSecret=process.env.NEXT_PUBLIC_CLIENT_SECRET

        console.log(clientID)
        console.log(clientSecret)

        const response=await fetch
        (`https://www.figma.com/api/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=http://localhost:3001/Code&code=${userCode}&grant_type=authorization_code`,
        {
            method:"POST",
        })

        const data= await response.json()
        console.log(data)
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
    const userCode=currentURL.asPath.slice(11,36)

    // Sets a random state for verification
    const userState="test"

//*************************************************************
    // Gets the JSON format of the Figma file
    async function getJSON(){

        console.log(fileID)
        console.log(userAccessToken)

        const result=await fetch
        (`https://api.figma.com/v1/files/${fileID}`,
    {
        method: "GET",
        headers:{
            "Authorization":`Bearer ${userAccessToken}`
        }
    })

        const figmaStructure=await result.json()
        const document=figmaStructure.document.children; 
        console.log(figmaStructure)
//************************************************************* 

}
    return (
        <>
            <header>
                <h1>HTML</h1>
                <h1>CSS</h1>
                <h1>React</h1>
            </header>

            <main>
                <button onClick={()=>{showInput();generateUserToken()}}>generate token</button>
            </main>

            {/* Authenticates the user */}
            <Link href=
            {`https://www.figma.com/oauth?client_id=jqf4nL30juMiPSpgOFQJUT&redirect_uri=http://localhost:3001/Code&scope=file_read&state=test&response_type=code`}
            >Authenticate</Link>

            {clicked && <input onChange={(e)=>setFileURL(e.target.value)} placeholder='URL'/>}
            <br></br>
            <p>userId:{fileID}</p>
            <br></br>
            <p>state:{userState}</p>
            <br></br>
            <p>token:{userAccessToken}</p>
            <button onClick={getJSON}>click to activate</button>
        
        
    </>
    )
}
export default Code
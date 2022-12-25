import React, { useEffect, useState } from 'react'
import css from '../csscomponents/home.css';

export default function Home() {

  const [img,setImg]=useState("");
  
   useEffect(() => {
     imgDay()
   }, [])
   
  
  const imgDay=async()=>{
    try {
      const ApiKey= process.env.REACT_APP_API_KEY
      const img= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
      const fechtJson =await img.json()

      setImg(fechtJson)

    } catch (error) {
      console.log("error")
    }
  }
  return (
    <>
    <div className='titulo'>
    <h1>Imagen del día: {img.title}</h1>
    </div>
    <div className='imgDiariaApi'>
          <img alt={img.title} src={img.url}/>
    </div>
    </>
  )
}

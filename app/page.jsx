"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Masonry } from 'react-masonry'
import Model from './components/Model'

export default function Page (){

  const [ selectImage , setSelectImage ] = useState()
  const [ images , setImages ] = useState([])

  useEffect((()=>{
    fetchImages()
  }
  ),[])


  const fetchImages = () => {
      axios.get("./api/images")
      .then(data => setImages(data.data.images))
  }

  return(
    <>
      <Model setSelectImage={setSelectImage} selectImage={selectImage} />
      <div className="max-w-6xl container border border-zinc-800 rounded-lg mx-auto bg-zinc-950 p-4 mt-4">
        <h1 className='bg-gradient-to-tr from-blue-400 to-blue-700 bg-clip-text text-transparent font-bold text-6xl mb-4'>App gallery</h1>
        <Masonry>
          {images.map((data,i) => (
            <div key={i} className='p-2' onClick={() => {setSelectImage(data)}}>
              <img width={250} className='rounded-lg block' src={`./api/image/${data}`} />
            </div>
          ) )}
        </Masonry>
      </div>
    </>
  )
}
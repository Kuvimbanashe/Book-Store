import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ViewImages = () => {
  const [images, setImages] = useState([])

  useEffect(() => async () =>   {
    try {
      const res = await axios.get('http://localhost:3000/')
      setImages(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('Done')
    }   
  }, [])
  return (
    <div>
        <h1>View Images</h1>
        <div className='flex flex-wrap gap-4 justify-center items-center '>
            {images.map(image => (
                <img src={`../${image.split('public')[1]}`} alt={image} className='w-[300px] h-[300px] shadow-md m-8 rounded-md hover:scale-110' />
            ))}
        </div>
    </div>
  )
}

export default ViewImages
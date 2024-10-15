import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteBook = async () => {    
    setLoading(true)
    await axios.delete(`http://localhost:5555/books/delete/${id}`)
    .then(() => {
      navigate('/home')
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div>
      <div className='m-8 items-center justify-center gap-x-8'>
       
        <div className='flex items-center justify-center '>

        <div className=' items-center justify-center bg-sky-800 w-1/2 rounded-t-lg'>
        <div className='flex items-center justify-center bg-sky-800 p-2 rounded-t-lg w-1/2'>
          <h2 className='text-2xl font-bold text-white'>Delete Book</h2>
        </div>
        {loading ? <Spinner /> : (
          <>
          <div className=' bg-white p-4 rounded-t-xl w-full'>
          <h2 className='text-2xl font-bold text-slate-700'>Are you sure you want to delete this book?</h2>
          <div className='grid grid-cols-2 m-8'>
            <div>
              <button onClick={handleDeleteBook} className='bg-red-500 text-white px-4 py-2 rounded-md my-2 hover:bg-red-600'>Delete</button>
            </div>
            <div>
              <button onClick={() => navigate('/home')}  className='bg-green-500 text-white px-4 py-2 rounded-md my-2 hover:bg-green-600'>Cancel</button>
            </div>
          </div>
        </div>
          </>
        )}

        </div>
        
      </div>
      </div>
    </div>
  )
}

export default DeleteBook
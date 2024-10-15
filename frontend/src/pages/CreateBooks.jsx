import React from 'react'
import { useState } from 'react'

import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const book = {title, author, publishYear}
    setLoading(true)
    try {
      await axios.post('http://localhost:5555/books', book)
      navigate('/')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    } 
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-300'>
      <div className='flex flex-col items-center justify-center bg-white rounded-md w-1/2 h-2/3 '>
      <h2 className='text-2xl font-bold text-sky-800 '>Create Book</h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <div className=' grid grid-cols-2 gap-2'>
          <label htmlFor='title'>Title </label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='border border-slate-500 rounded-md p-1 my-3' />

        </div>
        <div className=' grid grid-cols-2 gap-2'>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} className='border border-slate-500 rounded-md p-1 my-3' />
        </div>
        <div className=' grid grid-cols-2 gap-2'>
          <label htmlFor='publishYear'>Publish Year</label>
          <input type='text' id='publishYear' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border border-slate-500 rounded-md p-1 my-3' />
        </div>
        <button className='bg-sky-800 text-white px-4 py-2 rounded-md my-2 hover:bg-sky-900 w-2/3'>Add Book</button>
        {loading && <Spinner />}
        {error && <div className='text-red-500'>{error}</div>}

      </form>
      </div>
    </div>
  )
}

export default CreateBooks
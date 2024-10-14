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
    <div>
      <h2 className='text-2xl font-bold text-sky-800 my-3'>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='border border-slate-500 rounded-md p-1' />

        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.target.value)} className='border border-slate-500 rounded-md p-1' />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor='publishYear'>Publish Year</label>
          <input type='text' id='publishYear' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border border-slate-500 rounded-md p-1' />
        </div>
        <button className='bg-sky-800 text-white px-4 py-2 rounded-md my-2'>Add Book</button>
        {loading && <Spinner />}
        {error && <div>{error}</div>}

      </form>
    </div>
  )
}

export default CreateBooks
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import useFetch from '../components/useFetch'
import { MdYard } from 'react-icons/md'

const EditBook = () => {
  
  const [title, setTitle] = useState('juru')
  const [author, setAuthor] = useState('gada')
  const [publishYear, setPublishYear] = useState(2024)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [myBook, setMyBook] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5555/books/details/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setMyBook(result.book);
        result.book.map((book) => {
          setTitle(book.title)
          setAuthor(book.author)
          setPublishYear(book.publishYear)
        })
        console.log("result", result.book);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('An error occurred while fetching data : ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  	}, []);


  const handleSubmit = async (e) => {
    e.preventDefault()
    const book = { title, author, publishYear }
    setLoading(true)
    setError(null) // Reset error before making the request
    try {
      if (!title || !author || !publishYear) {
        throw new Error('All fields are required')
      }
      await axios.put(`http://localhost:5555/books/${id}`, book)
      navigate('/home')
    } catch (error) {
      setError(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-300'>
      <div className='flex flex-col items-center justify-center bg-white rounded-md w-1/2 h-2/3 '>
      <h2 className='text-2xl font-bold text-sky-800 '>Edit Book</h2>
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
        <button className='bg-sky-800 text-white px-4 py-2 rounded-md my-2 hover:bg-sky-900 w-2/3'>Edit Book</button>
        {loading && <Spinner />}
        {error && <div className='text-red-500'>{error}</div>}

      </form>
      </div>
    </div>
  )
}

export default EditBook
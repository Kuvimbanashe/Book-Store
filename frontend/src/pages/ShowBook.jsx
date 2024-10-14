import React from 'react'
import Spinner from '../components/Spinner'
import useFetch from '../components/useFetch'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import { PiAlignCenterHorizontalSimple } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'


const ShowBook = () => {
  const {id} = useParams();
  const url= `http://localhost:5555/books/details/${id}`;
  const {data, loading, error} = useFetch(`http://localhost:5555/books/details/${id}`);
  console.log("info of book :", data.book);
  return (
    <div className='p-4 items-start'>
      
      <div className='flex grid-cols-2 m-8 items-start gap-x-8'>
        <BackButton />
        <div>
          <h2 className='text-2xl font-bold text-sky-800'>Book Details</h2>
        </div>
      </div>
      {loading && <Spinner />}
      
      {error && <div>{error}</div>}
      <div className='items-start'>
      {!loading && data.book.map((book) => (
        <div key={book._id} className="rounded-md p-10 lg:w-[70%] border border-slate-700 m-8">
          <span><p className='text-slate-700 my-3 text-2xl font-bold'>Book Id : {"\t\t" + book._id}</p></span>
          <span><h1 className='text-2xl font-bold text-sky-800 my-3'>Title : {book.title}</h1></span>
          <span><p className='text-slate-700 my-3 text-2xl font-bold'>Author : {book.author}</p></span>
          <span><p className='text-slate-700 my-3 text-2xl font-bold'>Publish Year : {book.publishYear}</p></span>
          <span><p className='text-slate-700 my-3 text-2xl font-bold'>Created At : {new Date(book.createdAt).toString()}</p></span>
          <span><p className='text-slate-700 my-3 text-2xl font-bold'>Updated At : {new Date(book.updatedAt).toString()}</p></span>
          <div className='flex justify-start gap-x-4 my-3'>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-4xl text-yellow-600' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className='text-4xl text-red-600' />
            </Link>
          </div>
        </div>
      ))}
        
        </div>  
    </div>
  )
}

export default ShowBook
import React from 'react'

import { Link } from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete, MdOutlineVisibility } from 'react-icons/md'

const ShowCard = ({books,loading,error}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {!loading && books.books.map((book)=>(
        <div key={book._id} className='border-2 border-sky-400 rounded-lg p-3 flex flex-col justify-center items-center'>
            <PiBookOpenTextLight className='text-sky-800 text-8xl mb-3'/>
            <span className='text-xl text-sky-800 font-semibold capitalize'>{book.title}</span>
            <div className='flex justify-between gap-x-2 w-full mt-4'>
              <Link to={`/books/details/${book._id}`}>
                <MdOutlineVisibility className='text-4xl text-sky-800'/>
              </Link>
              <div className='flex gap-x-2'>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-4xl text-sky-800'/>
                </Link>
              </div>
              <div className='flex gap-x-2'>
                <MdOutlineDelete className='text-4xl text-sky-800'/>
              </div>
            </div>
        </div>
    ))}
    </div>
  )
}

export default ShowCard

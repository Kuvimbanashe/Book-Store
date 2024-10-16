import React from 'react'

import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete, MdOutlineVisibility } from 'react-icons/md'




const ShowCard = ({ books, loading, error }) => {
  //style={{ backgroundImage: 'url(../public/images/bg.jpg)' }}
  return (
    <div className='w-full h-full bg-white border-2 rounded-lg'>
      <div className='grid grid-cols-4 gap-4 p-2 items-center justify-center' >
  

        {!loading && books.books.map((book) => (
          <div key={book._id} className='bg-sky-800 border-2 mt-2 border-sky-400 rounded-lg p-3 justify-center items-center'>
            <PiBookOpenTextLight className='text-white text-8xl mb-3' />
            <span className='text-xl text-white font-semibold capitalize'>{book.title}</span>
            <div className='flex justify-between gap-x-2 w-full mt-4 mb-0'>
              <Link to={`/books/details/${book._id}`} className=''>
                <MdOutlineVisibility className='text-4xl text-white' />
              </Link>
              <div className='flex gap-x-2'>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-4xl text-white' />
                </Link>
              </div>
              <div className='flex gap-x-2'>
                <MdOutlineDelete className='text-4xl text-white' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowCard

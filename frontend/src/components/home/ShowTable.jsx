import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import {  MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ShowTable = ({books,loading,error}) => {
  return (
    <div>
        
					<table className='w-full border-separate border-spacing-2'>
						<thead>
							<tr>
								<th className='border border-slate-600 rounded-md'>No</th>
								<th className='border border-slate-600 rounded-md'>Title</th>
								<th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
								<th className='border border-slate-600 rounded-md max-md:hidden'>Year Published</th>
								<th className='border border-slate-600 rounded-md'>Operations</th>
							</tr>
						</thead>
						<tbody>

							{!loading && books.books.map((book, index) => (

								<tr key={book._id} className='h-8'>
									<td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
									<td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
									<td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
									<td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
									<td className='border border-slate-700 rounded-md text-center flex justify-center gap-x-4'>

										<Link to={`/books/details/${book._id}`}>
											<BsInfoCircle className='text-2xl text-green-800' />
										</Link>
										<Link to={`/books/edit/${book._id}`}>
											<AiOutlineEdit className='text-2xl text-yellow-600' />
										</Link>
										<Link to={`/books/delete/${book._id}`}>
											<MdOutlineDelete className='text-2xl text-red-600' />
										</Link>

									</td>
								</tr>

							))}
						</tbody>
					</table>
      
    </div>
  )
}

export default ShowTable

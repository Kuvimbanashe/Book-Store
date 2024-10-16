import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import {  MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ShowTable = ({books,loading,error}) => {
	const [bg,setBg] = useState("white")
	const setBgColor = (index) => {
		if (index % 2 === 0) {
			setBg('white')
		} else {
			setBg('gray')
		}
	}
  return (
    <div className='w-full h-full'>
        
					<table className='w-full border-separate border-spacing-2'>
						<thead>
							<tr>
								<th className='border border-slate-600 rounded-md bg-sky-800 text-white text-lg p-1' >No</th>
								<th className='border border-slate-600 rounded-md bg-sky-800 text-white text-lg p-1'>Title</th>
								<th className='border border-slate-600 rounded-md bg-sky-800 text-white text-lg p-1 max-md:hidden'>Author</th>
								<th className='border border-slate-600 rounded-md bg-sky-800 text-white text-lg p-1 max-md:hidden'>Year Published</th>
								<th className='border border-slate-600 rounded-md bg-sky-800 text-white text-lg p-1'>Operations</th>
							</tr>
						</thead>
						<tbody>

							{!loading && books.books.map((book, index) => (
								

								<>
								{(index % 2 ===0) && 
									<tr key={book._id}>
									<td className='border border-slate-700 rounded-md text-center bg-sky-800 text-white p-1' >{index + 1}</td>
									<td className='border border-slate-700 rounded-md text-center bg-white p-1' >{book.title}</td>
									<td className='border border-slate-700 rounded-md text-center bg-white max-md:hidden p-1' >{book.author}</td>
									<td className='border border-slate-700 rounded-md text-center bg-white max-md:hidden p-1' >{book.publishYear}</td>
									<td className='border border-slate-700 rounded-md text-center bg-white flex justify-center items-center gap-4 p-1' >

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
								}
								{!(index % 2 !==0) && (
									<tr key={book._id}>
									<td className='border border-slate-700 rounded-md text-center bg-sky-800 text-white p-1' >{index + 1}</td>
									<td className='border border-slate-700 rounded-md text-center bg-gray-200 p-1' >{book.title}</td>
									<td className='border border-slate-700 rounded-md text-center bg-gray-200 max-md:hidden p-1' >{book.author}</td>
									<td className='border border-slate-700 rounded-md text-center bg-gray-200 max-md:hidden p-1' >{book.publishYear}</td>
									<td className='border border-slate-700 rounded-md text-center bg-gray-200  flex justify-center items-center gap-4 p-1' >

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
								)}
								</>
								

							))}
						</tbody>
					</table>
      
    </div>
  )
}

export default ShowTable

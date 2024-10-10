import React from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import useFetch from '../components/useFetch';

const Home = () => {
	const { data: books, loading, error } = useFetch("http://localhost:5555/books/");

	return (
		<div className='p-4'>
			<div className='flex justify-between items-center'>
				<h2 className="text-3xl my-8">Books List</h2>
				<Link to='/books/create'>
					<MdOutlineAddBox className='text-sky-600 text-4xl' />
				</Link>
			</div>
			{error && <p className="text-red-500">{error}</p>}
			{loading ? (
				<Spinner />
			) : (
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
							{loading ? <Spinner /> : books.map((book, index) => (
								<tr key={book._id} className='h-8'>
									<td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
									<td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
									<td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
									<td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
									<td className='border border-slate-700 rounded-md text-center'>
										<div className='flex justify-center gap-x-4'>
											<Link to={`/books/details/${book._id}`}>
												<BsInfoCircle className='text-2xl text-green-800' />
											</Link>
											<Link to={`/books/edit/${book._id}`}>
												<AiOutlineEdit className='text-2xl text-yellow-600' />
											</Link>
											<Link to={`/books/delete/${book._id}`}>
												<MdOutlineDelete className='text-2xl text-red-600' />
											</Link>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Home;
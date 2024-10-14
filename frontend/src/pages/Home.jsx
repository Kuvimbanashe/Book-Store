import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

import { MdOutlineAddBox } from 'react-icons/md';
import useFetch from '../components/useFetch';
import ShowCard from '../components/home/ShowCard';
import ShowTable from '../components/home/ShowTable';


const Home = () => {
	const { data, loading, error } = useFetch("http://localhost:5555/books/");
	const [showType,setType] = useState("table")


	return (
		<div className='p-4'>
			<div className="flex justify-center items-center gap-x-4">

				<button
				className='bg-sky-300 hover:bg-sky-600 px-6 py-2 rounded-lg'
				onClick={()=>setType("table")}
				>
					Table

				</button>

				<button
				className='bg-sky-300 hover:bg-sky-600 px-6 py-2 rounded-lg'
				onClick={()=>setType('card')}
				>
					Card

				</button>



			</div>
			<div className='flex justify-between items-center'>
				<h2 className="text-3xl my-8">Books List</h2>
				<Link to='/books/create'>
					<MdOutlineAddBox className='text-sky-600 text-4xl' />
				</Link>
			</div>
			{error && <p className="text-red-500">{error}</p>}

		
			{loading && <Spinner/>}
			<div>
				{!loading && showType==="table" ? <ShowTable books={data} loading={loading} error={error}/> : <ShowCard books={data} loading={loading} error={error}/>}
			
			</div>
					
				

		</div>
	);
};

export default Home;
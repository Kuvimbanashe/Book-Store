import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5555/api/auth/login', { email, password })
            console.log(res.data)
            navigate('/home')
        } catch (error) {
            setError(error.response.data.message)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center h-2/3 rounded-md w-1/2'>
                <div className='w-2/3 h-full bg-sky-800 rounded-t-lg '>
                    <div className='flex items-center justify-center bg-sky-800 p-2 rounded-t-lg w-full'>
                        <h1 className='text-4xl font-bold text-white'>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit} className=' bg-white rounded-t-xl w-full h-full py-10 px-6'>
                        <div className='items-center justify-center p-10 w-full h-full'>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className='border-2 border-gray-300 rounded-md m-3 p-2 w-full' />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className='border-2 border-gray-300 rounded-md m-3 p-2 w-full' />
                        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md m-3 w-full'>Login</button>
                        
                        {error && <p className='text-red-500'>{error}</p>}
                        <p className='text-sm m-3 p-2'>Don't have an account? <Link to="/signup" className='text-blue-500'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
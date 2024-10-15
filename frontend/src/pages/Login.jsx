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
        <h1 className='text-4xl font-bold'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className='border-2 border-gray-300 rounded-md p-2' />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className='border-2 border-gray-300 rounded-md p-2' />
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
            {error && <p className='text-red-500'>{error}</p>}
            <p className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-500'>Register</Link></p>
        </form>
    </div>
  )
}

export default Login
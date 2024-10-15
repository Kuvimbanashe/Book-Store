import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5555/api/auth/signup', { username, email, password, confirmPassword })  
            setMessage(response.data.message)
            setSuccess(true)
            navigate('/home')
        } catch (error) {
            setError(error.response.data.message)   
            setSuccess(false)
        }
    }
  return (
          
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold mb-4 text-blue-500 '>Signup</h1>
        <form onSubmit={onSubmit} className='flex flex-col items-center justify-center' method='POST'>
            <div className='flex flex-col items-center justify-center'>
                <input type="text" placeholder="Username" required name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='w-full p-2 m-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' />
                <input type="text" placeholder="Email" required name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 m-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' />

                <input type="password" placeholder="Password" required name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 m-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' />
                <input type="password" placeholder="Confirm Password" required name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full p-2 m-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' /> 
                <button type="submit" disabled={loading} className='w-full p-2 m-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300'>Signup</button>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
                <p>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Signup
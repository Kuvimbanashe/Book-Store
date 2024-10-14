import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteBook = async () => {    
    setLoading(true)
    await axios.delete(`http://localhost:5555/books/delete/${id}`)
    .then(() => {
      navigate('/')
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div>
      {loading ? <Spinner /> : ""}
      <h2>Are you sure you want to delete this book?</h2>
      <button onClick={handleDeleteBook}>Delete</button>
    </div>
  )
}

export default DeleteBook
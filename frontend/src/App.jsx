import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes} from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import Signup from './pages/Signup' 
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />    
      <Route path='/signup' element={<Signup/>} />    
      <Route path='/login' element={<Login/>} />    
    </Routes>
  )
}

export default App

import { useState } from 'react'
import Header from './components/Header'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import UserList from "./Pages/UserList"
import Footer from './components/Footer'
import AddUser from './Pages/AddUser'

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userlist' element={<UserList/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

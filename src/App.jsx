import { useState } from 'react'
import { Navigate, Outlet, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Header from './components/Header';
import "./App.css"



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route  element={<RestrictedRoute/>}>

        <Route path="/details" element={<Details/>}/>

        </Route>
      </Routes>
      </>
  )
}

export default App


const RestrictedRoute = ()=>{
  const isLogin = localStorage.getItem("userDB")
  return isLogin?<Outlet/>:<Navigate to="/"/>
}

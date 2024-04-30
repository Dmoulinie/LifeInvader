import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Start from './components/pages/start/Start'
import Post from './components/pages/post/Post'
import Search from './components/pages/search/Search'
import Login from './components/pages/login/Login'
import Signup from './components/pages/login/Signup'
import NoPage from './components/pages/nopage/NoPage'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="post" element={<Post />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

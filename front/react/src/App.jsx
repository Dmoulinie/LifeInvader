import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout/Layout'

import Start from './components/pages/start/Start'
import Post from './components/pages/post/Post'
import Login from './components/pages/login/Login'
import User from './components/pages/user/userpage'
import NoPage from './components/pages/nopage/NoPage'
import RedirectPage from './components/pages/login/Redirect'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Route par défaut */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="post" element={<Post />} />
          <Route path="userpage" element={<User />} />
          <Route path="redirect" element={<RedirectPage />} />
        </Route>

        {/* Route pour le Login. */}
        <Route path="login" element={<Login />} />

        {/* Route pour la page 404 */}
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

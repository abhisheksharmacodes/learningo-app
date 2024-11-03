import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"

import Layout from './Layout.jsx'
import Home from './Home.jsx'

import Login from './screens/auth/login/login.jsx'
import Signup from './screens/auth/signup/signup.jsx'
import About from './screens/about/about.jsx'

import Dashboard from './screens/dashboard/dashboard.jsx'

import NoPage from './NoPage.jsx'

let App = () => <>
  <HashRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/" element={<Home />} />
      </Routes>
  </HashRouter>
</>

export default App

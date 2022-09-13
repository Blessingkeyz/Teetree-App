import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/signup/Signup'
import Settings from './components/settings/Settings'
import Home from './components/Home/Home'
import Statistics from './components/statistics/Statistics'
import Support from './components/support/Support'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stats" element={<Statistics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}

export default App
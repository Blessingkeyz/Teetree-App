import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/signup/Signup'
import Errorpage2 from './components/error/Errorpage2'
import LandingPage from './components/Landingpage/Landingpage'
import Settings from './components/settings/Settings'
import Statistics from './components/statistics/Statistics'
import Support from './components/support/Support'
// import Form from "./Components/Form/Form";
import OverView from "./Components/Pages/OverView"
import MyAccount from './Components/Pages/MyAccount'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stats" element={<Statistics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
      <Route path="/*" element={<Errorpage2 />} />
      <Route path="/dashboard" element={<OverView />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>

  )
}

export default App
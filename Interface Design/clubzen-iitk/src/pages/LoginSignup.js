import React from 'react'
import Login from '../components/authentication/Login'
import LoginRegister from '../components/authentication/LoginSignup'
import Register from '../components/authentication/Register'
import MainPageLayout from '../components/MainPageLayout'

const LoginSignup = () => {
  return (
      <MainPageLayout color="black">
          <Login />
          <Register />
    </MainPageLayout>
  )
}

export default LoginSignup
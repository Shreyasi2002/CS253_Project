import React from 'react'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'
import MainPageLayout from '../components/MainPageLayout'

const LoginSignup = () => {
  return (
      <MainPageLayout>
          <Login />
          <Register />
    </MainPageLayout>
  )
}

export default LoginSignup
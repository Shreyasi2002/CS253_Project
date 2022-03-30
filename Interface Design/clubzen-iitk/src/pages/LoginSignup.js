import React from 'react'
import LoginRegister from '../components/authentication/LoginSignup'
import MainPageLayout from '../components/MainPageLayout'

const LoginSignup = () => {
  return (
      <MainPageLayout>
          {/* <Login />
          <Register /> */}
          <LoginRegister />
    </MainPageLayout>
  )
}

export default LoginSignup
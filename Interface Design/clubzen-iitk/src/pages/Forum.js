import React, { useState, useEffect } from 'react'

import Discussion from '../components/forum/Discussion'
import StartForum from '../components/forum/StartForum'
import MainPageLayout from '../components/MainPageLayout'
import Login from '../components/authentication/Login'

const Forum = () => {
//     const [user, setUser] = useState(false);
//   useEffect(() => {
//       getUserContent().then(
//           (response) => {
//               setUser(true)
//           },
//           (error) => {
//               setUser(false)
//           }
//       )
//   }, []);
    return (
        <MainPageLayout>
            {/* {user? (<StartForum />): (<Login />)} */}
        </MainPageLayout>
    )
}

export default Forum
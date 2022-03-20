import React, { useState, useEffect } from 'react'

import Discussion from '../components/forum/Discussion'
import StartForum from '../components/forum/StartForum'
import MainPageLayout from '../components/MainPageLayout'
import Login from '../components/authentication/Login'
import { GetCurrentUser} from '../services/auth.service'

const Forum = () => {
    const [user, setUser] = useState(false);
  useEffect(() => {
      const v = GetCurrentUser();
      if (v) {
          setUser(true)
      }
  }, []);
    return (
        <MainPageLayout>
            <StartForum/>
        </MainPageLayout>
    )
}

export default Forum
import React, { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])
  return user ? (
    <h1>Welcome back, {user.displayName}!</h1>
  ) : (
    <h2>Not logged in</h2>
  )
}

export default Profile

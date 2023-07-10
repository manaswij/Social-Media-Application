import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profile/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default home

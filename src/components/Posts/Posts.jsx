import React from 'react'
import'./Posts.css'
import { PostsData } from '../../Data/PostData' 
import Post from '../Post/Post'


const Posts = () => {
  return (
    <div>
      <div className="Posts">
        {PostsData.map((post,id)=>{
            return <Post data={post} id={id} likes/>      //passing out data from PostsData array  to the Post component     
        })}
      </div>
    </div>
  )
}

export default Posts

import React from 'react'
import Post from './post/Post'
import { CircularProgress } from '@mui/material';
import { MainContainer, SmMargin, ActionDiv } from './styles';
import { useSelector } from 'react-redux';
const Posts = ({setCurrentId}) => {
  const data = useSelector(state => state.posts)
  return (
    <>
     {
      !data.length 
      ? 
      <CircularProgress/> 
      :
      <MainContainer container alignItems="stretch" gap={2}>
        {
          data.map((post)=>(
            <MainContainer key={post._id} item xs={12} sm={5}>
              <Post {...post} setCurrentId={setCurrentId}/>
            </MainContainer>
          ))
        }
      </MainContainer>
     }
    </>
  )
}

export default Posts
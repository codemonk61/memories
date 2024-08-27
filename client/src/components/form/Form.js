import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button } from "@mui/material"
import { StyledPaper, FormStyle, FileInput, ButtonSubmit } from './styles';
import {useDispatch, useSelector} from 'react-redux'
import FileBase from "react-file-base64"
import { createPost, updatePost} from '../../actions/post';

const initialValue = {
  creator: "",
  title: "",
  tags: "",
  message: "",
  selectedFile: ""
}
const Form = ({currentId, setCurrentId}) => {
 
  const [postData, setPostData] = useState(initialValue)
  const dispatch = useDispatch()
  const post = useSelector((state)=> state.posts.find((post)=> post._id === currentId ?  post : null ))

  const onSubmit = (e) => {
     e.preventDefault();

    currentId ? dispatch(updatePost(currentId, postData)) : dispatch(createPost(postData))
   
  }

  const clear = () => {
    setCurrentId(null)
    setPostData(initialValue)
  }

  const isDisable = Boolean(postData.creator && postData.message && postData.tags && postData.title)

  useEffect(()=>{
    if(post) setPostData(post)
  }, [post])

  return (
    <StyledPaper>
      <FormStyle autoComplete='off' noValidate onSubmit={onSubmit}>

        <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField name="creator" value={postData.creator} variant="outlined" fullWidth label="Creator" onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
        <TextField name="title" value={postData.title} variant="outlined" fullWidth label="Title" onChange={(e) => setPostData({...postData, title: e.target.value})}/>
        <TextField name="message" value={postData.message} variant="outlined" fullWidth label="Message" onChange={(e) => setPostData({...postData, message: e.target.value})}/>
        <TextField name="tags" value={postData.tags} variant="outlined" fullWidth label="Tags" onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}/>
        <FileInput>
          <FileBase
            style={{background: "blue"}}
            name="selectedFile"
            type="file"
            mutiple={false}
            onDone={(base64)=> {
              setPostData({...postData, selectedFile: base64.base64})
            }}
          >
          </FileBase>
          </FileInput>
          <ButtonSubmit disabled={!isDisable} variant='contained' type='submit' fullWidth size='large' color='primary'>Submit</ButtonSubmit>
          <Button variant='contained' onClick={clear} fullWidth size='small' color='error'>Clear</Button>
  
      </FormStyle>
    </StyledPaper>
  )
}

export default Form
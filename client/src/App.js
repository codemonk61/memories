import React, { useEffect } from 'react'
import { Container, Grid, Grow } from "@mui/material"
import { memoriesImages } from './images'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import { useDispatch } from "react-redux"
import { AppBar, Heading, Image } from './styles';
import { getPosts } from './actions/post'

const App = () => {

  const [currentId, setCurrentId] = React.useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar position='static'>
        <Heading variant='h2' align='center'>Memories</Heading>
        <Image src={memoriesImages} alt='memories' height={64} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
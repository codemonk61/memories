import * as api from "../api/index"

export const getPosts = () => {
   return async (dispatch) => {

      try {
         const response = await api.fetchPosts();
      
         dispatch({
            type: 'FETCH_ALL',
            payload: response
         })
      } catch (error) {
         console.log(error.message)
      }
   }
}

export const createPost = (post) => {
   return async (dispatch) => {
      try {
         const response = await api.createPost(post);
         dispatch({
            type: 'CREATE',
            payload: response
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export const updatePost = (id, updatedPost) => {

   return async (dispatch) => {
      try {
         const response = await api.updatePost(id, updatedPost);
      
         dispatch({
            type: "UPDATE",
            payload: response,
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export const deletePost = (id) => async (dispatch) => {
   try {
      await api.deletePost(id);
      console.log("deleteID>>>",id)
      dispatch({
         type: 'DELETE',
         payload: id
      })
   } catch (error) {
      console.log(error)
   }
}

export const likePost = (id) => {
   return async (dispatch) => {
      try {
         const response = await api.likePost(id);
         console.log("like post",response)
         dispatch({
            type: "LIKE",
            payload: response,
         })
      } catch (error) {
         console.log(error)
      }
   }
}
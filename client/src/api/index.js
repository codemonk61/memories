import axios from "axios"

const url = 'http://localhost:5000/posts'

export const fetchPosts = async() => {
    return fetch(url).then((res)=>{
    return res.json()
    }).then((data)=>{
        return data
    })
}

export const createPost = async(post) => {
   return fetch(url, {
        method: 'POST',            
        headers: {
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify(post) 
      })
      .then(response => response.json())  
      .then(data => data)     
      .catch(error => console.error('Error:', error));  
}

export const updatePost = async(id, post) => {
  return fetch(`${url}/${id}`, {
      method: 'PATCH',            
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify(post) 
    })
    .then(response => response.json())  
    .then(data => data)     
    .catch(error => console.error('Error:', error));  
}

export const deletePost = async(id) => {
 return fetch(`${url}/${id}`, {
      method: 'DELETE',            
      headers: {
        'Content-Type': 'application/json'  
      },
    })
    .then(response => response.json())  
    .then(data => data)     
    .catch(error => console.error('Error:', error));  
}

export const likePost = async(id) => {
  return fetch(`${url}/${id}/likePost`, {
      method: 'PATCH',            
      headers: {
        'Content-Type': 'application/json'  
      },
    })
    .then(response => response.json())  
    .then(data => data)     
    .catch(error => console.error('Error:', error));  
}
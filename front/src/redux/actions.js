import { ADD_FAV, REMOVE_FAV, GET_FAV, SIGN_UP, POST_USER } from "./action_types";
import axios from "axios";


export const signUp = (email, password)=>{
  let endpoint = 'http://localhost:3001/rickandmorty/login'
  return function(dispatch){
    axios.post(endpoint, email, password )
    alert('usuario registrado')
  
  }
}
export const setUser = (user)=>{
  console.log(user)
  return function(dispatch){
    return dispatch ({
      type: POST_USER,
      payload: user,
    })

  }
}

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return function(dispatch) {
     axios.post(endpoint, character)
     .then((response)=> {
      //   console.log(response);
       return dispatch({
         type: ADD_FAV,
         payload: character,
       });
     })
     .catch((error) => {
       console.log(error);
     });
   };
};

 
 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then((response) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: id,
       });
       });
    };
 };
 export const getFavorites = (userId) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${userId}`;
 
   return function(dispatch) {
     axios.get(endpoint)
       .then((response) => {
         return dispatch({
           type: GET_FAV,
           payload: response.data,
         });
       })
       .catch((error) => {
         // Manejar errores en caso de que la solicitud falle
         console.log("Error:", error);
       });
   };
 };
 

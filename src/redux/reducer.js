import { ADD_FAV, REMOVE_FAV } from "./action_types";

    const initialState = {
        myFavorites:[]
    }

    const reducer = ( state = initialState, action)=>{
        switch(action.type){
            case ADD_FAV:
                return{
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload]
                }
                case REMOVE_FAV:
                    let deleteCharacter = state.myFavorites.filter(ch => ch.id !== Number(action.payload))
                    return{
                        ...state,
                            myFavorites: deleteCharacter
                    }
                default:
                    return{
                        ...state
                    }
        }
    }
    export default reducer;

    // export const getCharacters = () => {
    //     return async function (dispatch) {
    //         return axios.get( 'http://localhost:3001/characters' ).then( ( response ) => {
    //             dispatch( {
    //                 type: GET_CHARACTERS,
    //                 payload: response.data
    //             })
    //         })
    //     }
    // };
    
    // export const getCharacterDetail = (idProduct) => {
    //     return async function (dispatch) {
    //         return axios.get(http://localhost:3001/characters/${idProduct} ).then( ( response ) => {
    //             dispatch( {
    //                 type: GET_CHARACTER_DETAIL,
    //                 payload: response.data
    //             })
    //         })
    //     }
    // };
    
    // export const createCharacter = (value) => {
    //     return {
    //         type: CREATE_CHARACTER,
    //         payload: {
    //             ...value,
    //             id: id++
    //         }
    //     }
    // };
    
    // // Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
    // export const deleteCharacter = ( id ) => {
    //     return {type: DELETE_CHARACTER, payload: id}
    // };
    
    // // Para obtener las naves, recorda mapear la info que te llega de la api, para retornar un array solo de naves, proba hacer un console.log() de lo que te devuelve la api, para mayor certeza.
    // export const getShips = () =>{
    //     return dispatch => {
    //         return axios.get( 'http://localhost:3001/characters' )
    //             .then( response => {
    //                 dispatch( {
    //                     type: GET_SHIPS,
    //                     payload: response.data.map(char => (char.ship))
    //                 } )
    //             })
    //         .catch(e => console.error(e))
    //     };
    // };
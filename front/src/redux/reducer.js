import { ADD_FAV, REMOVE_FAV, GET_FAV, POST_USER } from "./action_types";

    const initialState = {
        user:[],
        myFavorites:[],
        allCharacters:[]
    }

    const reducer = ( state = initialState, action)=>{
        switch(action.type){

            case ADD_FAV:
                return {
                  ...state,
                  myFavorites: [...state.myFavorites, action.payload],
                };
                case REMOVE_FAV:
                    let updatedFavs = state.myFavorites.filter(ch => ch.id !== Number(action.payload))
                    return{
                        ...state,
                            myFavorites: updatedFavs
                    };
                    case GET_FAV:
                        return {
                          ...state,
                          myFavorites: action.payload,
                          allCharacters: action.payload.map((character) => ({
                            id: character.id,
                            name: character.name,
                            // Agrega otras propiedades de los personajes de SSBB que deseas guardar
                          })),
                        }
                    case POST_USER:{
                        return{
                            ...state,
                            user: action.payload
                        }
                    }
                    
                default:
                    return{
                        ...state
                    }
        }
    }
    export default reducer;


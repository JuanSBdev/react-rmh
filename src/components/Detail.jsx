import {React , useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import  axios  from "axios";

export  default function Detail (props){
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              console.log(data)
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     return(
            <div> {character.name ? 
                (
                    <div>
                        <h1> Name: {character.name} </h1>
                        <h3>gender: {character.gender} </h3>
                        <h3>specie: {character.specie} </h3>
                        <h3>Location: {character.origin.name} </h3>
                        <img  src= { character.image } /> 
                    </div>
                ) : ( <h2>asd</h2>)
             }
            </div>
             )
}


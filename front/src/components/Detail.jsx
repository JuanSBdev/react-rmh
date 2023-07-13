import {React , useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import  axios  from "axios";

export  default function Detail (props){
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        })
        .catch(error => {
          console.error('Error fetching character:', error);
          // Handle the error, e.g., show an error message or retry the request
        });
      return () => {
        setCharacter({});
      };
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


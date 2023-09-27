import {React , useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import  axios  from "axios";

import styles from './Detail.module.css'

export  default function Detail (props){
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.name) {
            setCharacter(data);
            console.log(character)
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
    }, [id]);;
     return(
            <div className={styles.wrapper} >
               {character.name ? 
                (
                    <div className={styles.card} > 
                    <img  src= { character.image } /> 
                    <div className={styles.info}>

                        <h1> {character.name} </h1>
                        <h2>&#x2764; {character.status}</h2>
                        <h3>gender: {character.gender} </h3>
                        <h3>specie: {character.species} </h3>
                        <h3>Location: {character.origin.name} </h3>
                    </div>
                    </div>
                ) : ( <h2 className={styles.loading}>Loading...</h2>)
             }
            </div>
             )
}


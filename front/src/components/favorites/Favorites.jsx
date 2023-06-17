import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import styles from '../cards.module.css';

export default function Favorites(props) {
  const myFavorites = useSelector(state => state.myFavorites);

  return (
    <div className={styles.Cards}>
      {myFavorites.length > 0 ? (
        myFavorites.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            // status={character.status}
            // species={character.species}
            // gender={character.gender}
            // origin={character.origin}
            // image={character.image}
          />
        ))
      ) : (
        <h1>No hay favoritos</h1>
      )}
    </div>
  );
}

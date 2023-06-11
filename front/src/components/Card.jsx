import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
let btn_img = 'https://cdn.icon-icons.com/icons2/1760/PNG/512/4105937-fav-favourite-rate-rating-star_113941.png';
export let btn_img2 = 'https://cdn-icons-png.flaticon.com/512/1601/1601243.png';
export let abt_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/2048px-About_icon_%28The_Noun_Project%29.svg.png';
export let btn_imgHome = 'https://therickandmortylibrary.netlify.app/static/media/rick-and-morty-hero-image.117dbeac17dee88b2029.png';

export default function Card(props) {
   const { id, onClose, } = props;
   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);
   
   const [isFav, setIsFav] = useState(false);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
            return;
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
      setIsFav(!isFav);
   };

   const handleOnClose = () => {
      onClose(id);
   };
   const handleInfo = () => {
      setIsActive(!isActive);
    };
   


   return (
      <div className={styles.divCarta} onMouseEnter={handleInfo} onMouseLeave={handleInfo} >
         <div className={styles.btnsCard}>
         {
            isFav ? (
               <button className={styles.buttonFav} onClick={handleFavorite}>

                  <img src={btn_img2} className={styles.btn_img} alt="" />  
               </button>
            ) : (
               <button className={styles.buttonFav} onClick={handleFavorite}>
                  <img src={btn_img} className={styles.btn_img} alt="" />  
                  
               </button>
            )
         }
         <button className={styles.button} onClick={handleOnClose}>X</button>
         </div>
         <NavLink to={`/detail/${id}`}>
            <img className={styles.characterImg} src={props.image} alt='RickImage' />
                  {isActive && (
                     <div className={styles.cardInfo}>
                        <h2 className={styles.nombre}>{props.name}</h2>
           <h2 className={styles.status}>&#x2764; {props.status}</h2>
          <h2>{props.species}</h2>
          <h2>{props.origin}</h2>
        </div>
      )}
         </NavLink>
      </div>
   );
}

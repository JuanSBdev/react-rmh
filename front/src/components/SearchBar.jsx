import { useState } from 'react';
import styles from './SearchBar.module.css'
import {NavLink, Link, useLocation  } from 'react-router-dom'
import Favorites from './favorites/Favorites';
import { btn_img2, abt_img, btn_imgHome } from './Card';
export default function SearchBar(props) {
   const { pathname } = useLocation();
   const isAbout = pathname === '/abt';
   const isHome = pathname === '/home';
   const isFav = pathname ==='/fav';
   const [id, setId] = useState('');
   const handleChange = (event)=>{
      let { value } = event.target;
      setId( value);
      console.log(value)
   }
   return (
      <div className={styles.container} >
         <div className={styles.containerLeft}>
         
                {!isAbout &&(<NavLink to={'/abt'} >
                   <button className={styles.btnAbt} >
                      <img className={styles.btnAbtImg} src={abt_img} alt="About" />
                   </button>
                </NavLink>)}
               {
                  isAbout &&(
                     <NavLink to={'/home'} >
                   <button className={styles.btnAbtActive} >
                      <img className={styles.btnAbtImg} src={abt_img} alt="About" />
                   </button>
                </NavLink>
                  )
               }
               <NavLink to={'/home'} >
                  <button className={styles.btnHome} >
                     <img src={btn_imgHome} alt="" />
                  </button>
               </NavLink>
         </div>
          <div className={styles.ContainerRight}>
            <label > Buscar por ID:</label>
            <input className={styles.input}
               placeholder='add numero..'
               type='search'
               name='search'
               onChange={handleChange}
            />
            <button className={styles.button} onClick={()=> props.onSearch(id)}>🔎</button>
            {
               !isFav &&(
                  <NavLink to={'/fav'}>
                  <button className={styles.btnFav} >
                     <img className={styles.imgFav} src={btn_img2} alt="" />
                  </button>
                </NavLink>
               )
             }{
               isFav &&(
                  <NavLink to={'/home'}>
                  <button className={styles.btnFavActive} >
                     <img className={styles.imgFav} src={btn_img2} alt="" />
                  </button>
                </NavLink>
               )
             }
          </div>
      </div>
   );
}

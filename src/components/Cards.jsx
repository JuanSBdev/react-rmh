import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   const { characters } = props;

   return (<div className={styles.Cards}>
      {
         characters.map((characters, index) => (<Card
            key={index} id={characters.id}
            name={characters.name}
            status={characters.status}
            species={characters.species}
            gender={characters.gender}
            origin={characters.origin.name}
            onClose={props.onClose}
            image={characters.image}>
               
            </Card>))
      }
                  <div className={styles.div3}>
                     {/* contiene el gif */}
                  </div>

         </div>);
}

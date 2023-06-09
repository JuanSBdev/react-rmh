import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import { Route, Routes,useLocation ,useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import axios from 'axios';
function App() {
   const [characters, setCharacters] = useState([
      {"id":23,"name":"Arcade Alien",
      "status":"unknown",
      "species":"Alien",
      "type":"",
      "gender":"Male",
      "origin":{"name":"unknown","url":""},
      "location":
      {"name":"Immortality Field Resort",
      "url":"https://rickandmortyapi.com/api/location/7"},
      "image":"https://rickandmortyapi.com/api/character/avatar/23.jpeg",
      "url":"https://rickandmortyapi.com/api/character/23","created":"2017-11-05T08:43:05.095Z"}
   
   ])
  
   const [access, setAccess] = useState(false);
   //  const EMAIL = 'ejemplo@gmail.com';
   //  const PASSWORD = '123';
    const navigate = useNavigate();
    const location = useLocation();

    function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
    
   //  function login(userData) {
   //     if (userData.password === PASSWORD && userData.email === EMAIL) {
   //        setAccess(true);
   //        navigate('/home');
   //     }
   //  }

   useEffect(()=>{
      !access && navigate('/')
   },[access]) 
   
   async function onSearch(id) {

try {
   const response = await axios(`http://localhost:3001/rickandmorty/onsearch/${id}`)
   const data =  response.data;
   if (data.name) {
      setCharacters(oldChars => [...oldChars, data]);
    } else {
      window.alert('¡No hay personajes con este ID!');
    }
} catch (error) {
          window.alert('¡No hay personajes con este ID!');
}
   }

   //    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
   //      .then(response => response.json())
   //      .then(data => {
   //        if (data.name) {
   //          setCharacters(oldChars => [...oldChars, data]);
   //        } else {
   //          window.alert('¡No hay personajes con este ID!');
   //        }
   //      })
   //      .catch(error => {
   //        console.error('Error fetching character:', error);
   //        // Handle the error, e.g., show an error message or retry the request
   //      });
   //  }
   function onClose(id) {
      setCharacters(
        characters.filter((c) => {c.id !== parseInt(id)})
      );
    }
      useEffect(()=>{
         console.log(characters)
      }, [characters])
      return (
         <div className='App'>
            {location.pathname !== '/' && <Nav onSearch={onSearch} />}
            <Routes>
               {location.pathname === '/' ? (
                  <Route exact path='/' element={<Form login={login} />} />
               ) : (
                  <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
               )}
               <Route path='/abt' element={<About />} />
               <Route path='/detail/:id' element={<Detail />} />
               <Route path='/fav' element={<Favorites/>} />
            </Routes>
         </div>
      );
       
       
}

export default App;

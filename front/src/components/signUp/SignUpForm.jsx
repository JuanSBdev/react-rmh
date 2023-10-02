import React, {useState} from 'react'
import styles from './SignUpForm.module.css'
export default function SignUpForm() {

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const handleChange = (e)=>{
        const { name, value} = e.target;
        setUserData ({
            ...userData,
            [name]: value
        })
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userData)
        // signUp(userData);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">email</label>
            <input type="text"
             onChange={handleChange}
             name='email'
             value={userData.email} />
            <label htmlFor="email">contraseña</label>
            <input type="password"
            onChange={handleChange}
                name='password'
                value={userData.password}
            />
            <button type='submit' className={styles.btn_reg}>Registrarme</button>
        </form>


    </div>
  )
}

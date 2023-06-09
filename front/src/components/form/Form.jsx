import React, { useState } from 'react'
import validate from './validate';
import styles from './Forms.module.css'
export default function Form(props) {
    const img_r = 'https://www.indiewire.com/wp-content/uploads/2022/10/Rick-Morty-Season-6-Fire-Eyes.png'
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        const { name, value} = e.target;
        setUserData ({
            ...userData,
            [name]: value
        })
        setErrors(validate({
            ...userData,
            [name]: value,
        }))
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.login(userData);
    }
  return (
    <div className={styles.container} >
        <form className={styles.form}  onSubmit={handleSubmit}>
            <h1>bienvenido C-137</h1>
            <label > e-mail </label>
            <input type="text" name='email'
                    value={userData.email}
                    onChange={handleChange} />
                    <p className={styles.pError}> {errors.email ? errors.email : null }  </p>
            <label > pass</label>
            <input className={styles.inputPass} type="password" name='password' onChange={handleChange} value={userData.pass} />
            <p className={styles.pError}> {errors.password ? errors.password : null }  </p>

            <button type="submit" > acceder </button>
        </form>
            <img className={styles.div2} src={img_r} alt="" />
    </div>
  )
}
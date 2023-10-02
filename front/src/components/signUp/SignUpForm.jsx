import React from 'react'
import styles from './SignUpForm.module.css'
export default function SignUpForm() {
  return (
    <div>
        <form action="" className={styles.form}>
            <label htmlFor="email">email</label>
            <input type="text" />
            <label htmlFor="email">contraseña</label>
            <input type="password" />
            <button className={styles.btn_reg}>Registrarme</button>
        </form>


    </div>
  )
}

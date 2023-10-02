export default function validate(input) {
    let regexMail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const regexPass = new RegExp('[0-9]');
    const errors = {};
  
    if (!input.email) {
      errors.email = "agrega un email";
    }
    if (!regexMail.test(input.email)) {
      errors.email = "agrega un email válido";
    }
    if (input.email.length > 35) {
      errors.email = "mayor a 35 caracteres";
    }
    if (regexMail.test(input.email)) {
      if (input.email === "ejemplo@gmail.com") {
        errors.email = null;
      } else {
        errors.email = "prueba con ejemplo@gmail.com";
      }
    }
    
    if (input.password.length < 3) {
      errors.password = "Ingrese un pass válido";
    }
    if (!regexPass.test(input.password)) {
      errors.password = "ingrese un pass numerico";
    }
    if (regexPass.test(input.password) && input.password.length >= 3) {
      errors.password = null;

        // if(input.password === '123'){
        // }
        // else{

        //     errors.password = "Intenta con 123";
        // }
    }
  
    return errors;
  }
  
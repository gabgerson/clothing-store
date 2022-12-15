// import { create } from 'domain';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button-component'
import FormInput from '../form-input/form-input.component';



import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '', 
    email: '',
    password: '',
    confirmPassword: '',
}



const SignUpForm = () => {
  const[formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields
  
  

  console.log('hit');

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert("passwords do not match");
      return;
    };

    try{
     const { user } = await createAuthUserWithEmailAndPassword(email, password);
     

     
     await  createUserDocumentFromAuth(user, { displayName });
     
     resetFormFields();
     
    

    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      }else{
      console.log('user creation encountered an error',error);
      }
    }


    
    // createUserWithEmailAndPassword1(email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   console.log(userCredential.user)
     
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(error)
    //   // ..
    // });

  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value })

  }
    return (
        <div className="sign-up-form-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
          
             <FormInput 
             label="Display Name"
             type="text" 
             name="displayName" 
             onChange={handleChange} 
             value={displayName} 
             required
             />

             <FormInput
             label="Email" 
             type="email" 
             name="email"
             onChange={handleChange} 
             value={email} 
             required
             />

    
             <FormInput 
             label="Password"
             type="password" 
             name="password" 
             onChange={handleChange} 
             value={password}  
             required
             />

      
             <FormInput
             label="Confirm Password" 
             type="password" 
             name="confirmPassword" 
             onChange={handleChange} 
             value={confirmPassword} 
             required
             />
             <Button   type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm
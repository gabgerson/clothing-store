import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button-component'
import FormInput from '../form-input/form-input.component';



import {SignUpContainer} from './sign-up-form.styles'

import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
    displayName: '', 
    email: '',
    password: '',
    confirmPassword: '',
};


const SignUpForm = () => {
  const[formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields
  
  const dispatch = useDispatch()

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
     dispatch(signUpStart(email, password, displayName))
     
     resetFormFields();
     

    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      }else{
      console.log('user creation encountered an error',error);
      }
    }
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value })

  }
    return (
        <SignUpContainer>
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
             <Button  type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm
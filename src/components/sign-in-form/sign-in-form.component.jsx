// import { create } from 'domain';
import { useState } from 'react';
import {  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button-component'
import FormInput from '../form-input/form-input.component';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'

const defaultFormFields = {
    email: '',
    password: '',
}



const SignInForm = () => {
  const[formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const signInWithGoogle = async () => {
   await signInWithGooglePopup();

}

  const handleSubmit = async (event) => {
    event.preventDefault();


    try{
     const { user }   = await signInAuthWithEmailAndPassword(email, password);
 

     resetFormFields();
     
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
        default:
          console.log(error);
      };
    
    }
}


    

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value })

  }
    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
          
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
            <ButtonsContainer>
               <Button type="submit">Sign In</Button>
               <Button type="button"  buttonType={'google'}  onClick={signInWithGoogle}>Google Sign In</Button>
            </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm
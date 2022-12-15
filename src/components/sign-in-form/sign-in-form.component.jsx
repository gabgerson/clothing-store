// import { create } from 'domain';
import { useState } from 'react';
import {  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button-component'
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}



const SignInForm = () => {
  const[formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields
  // console.log(formFields)

  // const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const signInWithGoogle = async () => {
   await signInWithGooglePopup();


 
    // setCurrentUser(user)
    // console.log(response);
}

  const handleSubmit = async (event) => {
    event.preventDefault();


    try{
     const { user }   = await signInAuthWithEmailAndPassword(email, password);
    //  setCurrentUser(user);

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
        <div className="sign-up-form-container">
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
            <div className="buttons-container">
               <Button type="submit">Sign In</Button>
               <Button type="button"  buttonType={'google'}  onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            </form>
        </div>
    );
};

export default SignInForm
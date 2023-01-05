import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button-component";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    }

    return (
        <div>
          <h1>Sign In Page</h1>
          <div >
            <div>
            <SignInForm />
            <Button buttonType= {BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
              Sign in with Google
            </Button>
            </div>
            <SignUpForm />
          </div>
        </div>
    );
};

export default SignIn;
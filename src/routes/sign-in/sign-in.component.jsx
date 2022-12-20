import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Button from "../../components/button/button-component";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);

        // console.log(response);
    }

    return (
        <div>
          <h1>Sign In Page</h1>
          <div >
            <div>
            <SignInForm />
            <Button buttonType= "google" onClick={logGoogleUser}>
              Sign in with Google
            </Button>
            </div>
            <SignUpForm />
          </div>
        </div>
    );
};

export default SignIn;
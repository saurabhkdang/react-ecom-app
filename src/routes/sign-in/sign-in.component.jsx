import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }    

    return (
        <div>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn
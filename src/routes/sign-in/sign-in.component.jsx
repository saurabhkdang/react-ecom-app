import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    useEffect(()=>{
        async function getRedirect() {
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        getRedirect();
    },[]);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }    

    return (
        <div>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect </button>
        </div>
    )
}

export default SignIn
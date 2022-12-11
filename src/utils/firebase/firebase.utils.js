import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACC9-5wB0AwjnU7E9aFO1Yb3Ti611zK2c",
    authDomain: "react-ecom-app-2c87a.firebaseapp.com",
    projectId: "react-ecom-app-2c87a",
    storageBucket: "react-ecom-app-2c87a.appspot.com",
    messagingSenderId: "202220824017",
    appId: "1:202220824017:web:6feab4738953dbabc6ecf0"
  };
  
// Initialize Firebase
const firebaeApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup  = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionlInformation={}) => {
    
    if(!userAuth)
    return;

    const userDocRef = doc(db, 'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionlInformation
            })
        } catch (error) {
            console.log('error creating the user:', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callbak) => onAuthStateChanged(auth, callbak);
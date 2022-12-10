import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email : '',
    password : '',
}



const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWIthGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for this email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="text" required onChange={handleChange} name='email' value={email}/>
                <FormInput label="Password" type="text" required onChange={handleChange} name='password' value={password}/>
                
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    {/* <button type="button" onClick={signInWIthGoogle}>Usign Google</button> */}
                    <Button type="button" buttonType='google' onClick={signInWIthGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
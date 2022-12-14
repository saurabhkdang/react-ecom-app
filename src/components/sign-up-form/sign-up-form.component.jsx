import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { emailSignUpStart, signUpStart } from "../../store/user/user.action";

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try {
            //const {user} = await createAuthUserWithEmailAndPassword(email, password);
            //await createUserDocumentFromAuth(user, {displayName});

            //dispatch(emailSignUpStart(email, password, displayName));
            dispatch(signUpStart(email, password, displayName));

            //setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Can not create user, already in use');
                return;
            }
            if(error.code === 'auth/weak-password'){
                alert('Can not create user, week password');
                return;
            }else{
                console.log(error);
            }
        }
    }
    

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" type="text" required onChange={handleChange} name='email' value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                {/* <label>Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email}/>
                <label>Password</label>
                <input type="password" require onChange={handleChange} name='password' value={password}/>
                <label>Confirm Pasword</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/> */}
                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm;
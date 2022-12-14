import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email : '',
    password : '',
}



const SignInForm = () => {
    
    const dispatch = useDispatch();

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
        //await signInWithGooglePopup();
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            //await signInAuthUserWithEmailAndPassword(email, password);
            dispatch(emailSignInStart(email, password));
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
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
                
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    {/* <button type="button" onClick={signInWIthGoogle}>Usign Google</button> */}
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWIthGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
import React from 'react';
import './sign-in.styles.scss';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
          };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        } catch (error) {
            alert(error);     
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value }); 
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email account and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                        label='Email'
                    />
                    <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required
                        label='Password'
                    />
                    <div className='buttons'>
                    <CustomButton onClick={this.handleSubmit}>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;
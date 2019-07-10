import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
          };
          window.k = this.state;
    }
        
        handleSubmit = async event => {
            event.preventDefault();
            const {displayName, email, password, confirmPassword} = this.state;
            if (password !== confirmPassword) {
                alert('Passwords don\'t match!');
                return;
            }
            
            try {
                const {user} = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );
    
                await createUserProfileDocument(user, {displayName});
                
                this.setState({
                    email: '',
                    password: '',
                    displayName: '',
                    confirmPassword: '',
                }); //Clear Form!
    
            } catch (error) {
                alert(error);
            }
        };


    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value }); 
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I already have an account</h2>
                <span className="subtitle">Sign in with your email account and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text'
                        value={displayName} 
                        handleChange={this.handleChange} 
                        required
                        label='Display Name'
                    />
                    <FormInput 
                        name='email'
                        type='email' 
                        value={email} 
                        handleChange={this.handleChange} 
                        required
                        label='Email'
                    />
                    <FormInput 
                        name='password' 
                        type='password'
                        value={password} 
                        handleChange={this.handleChange} 
                        required
                        label='Password'
                    />
                    
                    <FormInput 
                        name='confirmPassword' 
                        type='password'
                        value={confirmPassword} 
                        handleChange={this.handleChange} 
                        required
                        label='Confirm Password'
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignUp;
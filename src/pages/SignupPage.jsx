import React,{ useState, useRef} from 'react'
import '../stylesheet/signup.css'
import '../stylesheet/app.scss'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import Add from '../assets/ape1.jpeg'

import { signup } from "../firebase/FirbaseConfig";

const SignupPage = () => {

        const displayNameRef = useRef();
        const emailRef = useRef();
        const passwordRef = useRef(); 
        const passwordConfirmRef = useRef();

        const [loading, setLoading] = useState(false)
        const [error, setError] = useState();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        setLoading(true)

        try{
            setError("");
            setLoading(true);
             await signup(emailRef.current.value, passwordRef.current.value)
            // navigate("/")
        } catch{
            setError('Failed to create an account, Incorrect email format or Email already in use')
        }
        setLoading(false)
    }

  return (
    <div className='d-flex justify-content-center align-items-center' id='login-container'
    style={{minHeight:'88vh'}}>
    <div className='w-100'
            style={{maxWidth:'400px'}}>
        <Card >
            <Card.Body>
                <h2 className='text-center mb-2 mt-2'>ReChat</h2>
                <p className='text-center mb-1'>Registration</p>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label></Form.Label>
                        <Form.Control  type="name" placeholder='Display Name'  ref={displayNameRef}/>
                        <Form.Label></Form.Label>
                        <Form.Control  type="email" placeholder='Email Address'ref={emailRef}/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label></Form.Label>
                        <Form.Control  type="password" placeholder='Password' ref={passwordRef}/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label></Form.Label>
                        <Form.Control  type="password" placeholder='Confirm Password' ref={passwordConfirmRef}/>
                    </Form.Group>

                    <Form.Group id='file' className='mt-2'>
                        <Form.Control type="file" style={{display:"none"}}/>
                        <Form.Label htmlFor='file'>
                            <img src={Add} alt='' width="50" height="50" style={{cursor:"pointer"}}/>
                            <span>Add an avatar</span>
                        </Form.Label>
                    </Form.Group>
                     <Button className="w-100 mb-1 mt-2" type='submit' disabled={loading} >Sign Up</Button>
                </Form>
            </Card.Body>
            <div className='m-1'>
                <div>Create an Account? <a href="/signup">Sign Up</a></div>
            </div> 
        </Card>
    </div>
    </div>

  )
}

export default SignupPage;
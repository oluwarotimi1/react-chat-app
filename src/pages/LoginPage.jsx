import React from 'react'
import '../stylesheet/loginpage.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'
    style={{minHeight:'100vh', backgroundColor:'#a7bcff'}}>
    <div className='w-100'
            style={{maxWidth:'400px'}}>
        <Card >
            <Card.Body>
                <h2 className='text-center mb-4' style={{color:'#5d5b8d'}}>ReChat</h2>
                <p className='text-center mb-1'>Log In</p>
                <Form>
                    <Form.Group id="email">
                        <Form.Label></Form.Label>
                        <Form.Control  type="email" placeholder='Email Address'/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label></Form.Label>
                        <Form.Control  type="password" placeholder='Password'/>
                    </Form.Group>
                     <Button className="w-100 mb-3 mt-3" style={{backgroundColor:'#5d5b8d'}} >Log In</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <a to="/forgot-password">Forgot Password?</a>
                </div>
            </Card.Body>
            <div className='m-2'>
                <div>Create an Account? <a href="/signup">Sign Up</a></div>
            </div> 
        </Card>
    </div>
    </div>

  )
}

export default LoginPage
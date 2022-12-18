import React from 'react'
import '../stylesheet/loginpage.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'
    style={{minHeight:'100vh'}}>
    <div className='w-100'
            style={{maxWidth:'400px'}}>
        <Card >
            <Card.Body>
                <h2 className='text-center mb-4'>Logs In</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  type="email"/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" />
                    </Form.Group>
                     <Button className="w-100 mb-3 mt-3" >Log In</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <a to="/forgot-password">Forgot Password?</a>
                </div>
            </Card.Body>
            <div className='m-2'>
                <div>Create an Account? <a to="/signup">Sign Up</a></div>
            </div> 
        </Card>
    </div>
    </div>

  )
}

export default LoginPage
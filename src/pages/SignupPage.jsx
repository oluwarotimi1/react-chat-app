import React from 'react'
import '../stylesheet/signup.css'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import Add from '../assets/avatar1.jpeg'

const SignupPage = () => {
    // const HandleSubmit = () =>{
    //     return(
            
    //     )
  return (
    <div className='d-flex justify-content-center align-items-center'
    style={{minHeight:'88vh'}}>
    <div className='w-100'
            style={{maxWidth:'400px'}}>
        <Card >
            <Card.Body>
                <h2 className='text-center mb-4'>ReChat</h2>
                <p className='text-center mb-1'>Registration</p>
                <Form >
                    <Form.Group id="email">
                        <Form.Label></Form.Label>
                        <Form.Control  type="name" placeholder='Display Name'/>
                        <Form.Label></Form.Label>
                        <Form.Control  type="email" placeholder='Email Address'/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label></Form.Label>
                        <Form.Control  type="password" placeholder='Password'/>
                    </Form.Group>

                    <Form.Group id='file' className='mt-2'>
                        <Form.Control type="file" style={{display:"none"}}/>
                        <Form.Label htmlFor='file'>
                            <img src={Add} alt='' width="50" height="50" style={{cursor:"pointer"}}/>
                            <span>Add an avatar</span>
                        </Form.Label>
                    </Form.Group>
                     <Button className="w-100 mb-1 mt-2" >Sign Up</Button>
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
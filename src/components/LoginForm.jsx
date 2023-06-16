import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginForm = ({setShow}) => {
    return (
    <Container className='h-100' fluid="lg"> 
        <Row className='h-75  d-flex flex-wrap'>
            <Col md={6} className=' d-flex justify-content-center align-items-center flex-column '> 
            
            <h1 className='text-primary fw-bold '> facebook</h1>
            <p className='lead font-weight-bold'> Facebook helps you connect and share with the people in your life. </p>
            
            </Col>
            <Col md={6} className=' d-flex justify-content-center align-items-center   bg-yellow flex-column '> 
                <div className='p-3 ' style={{ width:"396px"}}>
                    <Form className=''>
                        <Form.Control type='email' placeholder='Email adress or phone number' className='w-100 my-3 fs-6 p-2'></Form.Control>
                        <Form.Control type='password' placeholder='Password' className='w-100 my-3 fs-6 p-2' ></Form.Control>
                        <Button className="btn btn-primary w-100 my-3"> Login</Button>
                        <div className='text-center text-decoration-none text-primary'> <Link to="/forgetPassword"> forgetting password </Link></div>

                        <div className="text-center my-3 p-2 border-top"> 
                            <Button variant='success'>
                                <Link to="/regiester"> Create New Account </Link>
                                
                                </Button>
                        </div>

                        <div> <strong> create a page</strong> for a celebrity, brand or business</div>
                        
                    </Form>

                </div>
                
            </Col>
        </Row>
        <Row className='bg-danger'></Row>
    </Container>
    )
}

export default LoginForm
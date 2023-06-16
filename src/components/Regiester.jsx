import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Regiester = ({show, setShow}) => {
    return (
        <div 
        // style={{display: show ? "block" : "none "}}
        className='blur  '
        >
            <div className="wraper">
                <div className="form-header mb-3 text-center">
                    <div>
                        <h3>Create a new account </h3>
                        <p className='lead'> it's quick and easy  </p>
                    </div>
                </div>
                <form action="" className="form-body form  text-center d-flex flex-column gap-3 px-2">
                    <div className="name input-group ">
                        <input type="text" name="" id="" className='form-control mx-2' placeholder='first name'/>
                        <input type="text" name="" id="" className='form-control mx-2'placeholder='last name'/>
                    </div>

                    <div className="email mx-2">
                    <input type="text" name="" id="" className='form-control ' placeholder='mobile number or Email'/>
                    </div>

                    <div className="password mx-2">
                        <input type="text" className='form-control 'placeholder='New Password'/>
                    </div>

                    <div className="birth text-start">
                        <span className='text-start'>date of birth </span>
                        <div className="-input-group d-flex gap-3">
                            <input type="select" className='form-select' />
                            <input type="select" className='form-select' />
                            <input type="select" className='form-select' />
                        </div>
                    </div>

                    <div className="gender text-start fs-6">

                        <span className='text-start'>gender </span>

                        <div className="input-group d-flex justify-content-between">
                            <div className="form-check  ">
                                <input type="radio" className="form-check-input" id="male" name='gender'/> 
                                <label htmlFor="male" className="form-check-label"> male </label>
                                
                            </div>

                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="female" name='gender'/> 
                                <label htmlFor="female" className="form-check-label"> female </label>
                                
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="custome" name='gender'/> 
                                <label htmlFor="custome" className="form-check-label"> Custome </label>
                                
                            </div>
                            {/* <input type="radio" className='form-check-input' />
                            <input type="radio" className='form-check-input' />
                            <input type="radio" className='form-check-input' /> */}
                        </div>
                    </div>
                    <p className=" "> People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                    <p className="">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    <div className='text-center'>
                        <button className='btn btn-success btn-lg px-5'> Sign Up</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Regiester
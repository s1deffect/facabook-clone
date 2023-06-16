import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Regiester = ({show, setShow}) => {
    return (
        <div 
        style={{display: show ? "block" : "none "}}
        className='blur d-flex justify-content-center align-items-center '
        >
                <div className='bg-alert  p-3' style={{width:"450px", backgroundColor:"grey"}}>
                    <div className="form-header ">
                        <div className=''>
                            <div className='fs-5 fw-bold text-start d-inline-block'> Sign Up</div>
                            <div className='d-inline-block me-5' > X </div>
                        </div>
                        <p className='text-start'> it is quick and easy </p>
                    </div>
                    <div className="form-body"></div>
                    
                </div>   
            
        </div>
    )
}

export default Regiester
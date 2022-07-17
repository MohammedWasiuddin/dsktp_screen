import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Confirm from './Confirm';
// import { Navigate, useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';

function EnrollmentDetails() {
    // const [screen, setScreen] = useState();
    let navigate = useNavigate();
    // useEffect(() => {
    //     alert('UE ran');
    // },[])
    // const handleChange = () => {
    // alert('im clicked');
    // // setScreen('bbb');
    // }
    return (
        <div>
            <div className='text'>
                <h5 style={{ textAlign: "left" }}>Reason for action</h5>
            </div>
            <div className='textarea' style={{ textAlign: "left" }}>

                <TextareaAutosize
                    // maxRows={6}
                    aria-label="maximum height"
                    placeholder=""
                    defaultValue=""
                    style={{ width: 600, height: 200 }}
                />
            </div>
            &nbsp;

            <div className='container'>
                <Button className='cancel'
                    variant="outline-primary"
                    size="lg">Cancel</Button>
                <Button className='continue'
                    variant="secondary"
                    size="lg"
                    onClick={()=>{
                        navigate("/confirm");
                    }}
                    // onClick={() => handleChange(<Confirm/>)}
                    >Continue</Button>
            </div>


        </div >
    )
}

{/* <button type="button" className="btn btn-primary pull-left">Pull Left Button</button>
&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-primary pull-right">Pull Right Button</button> */}

export default EnrollmentDetails;



{/* <div className='container cancel' style={{ textAlign: "left" }}>
                <Button className='cancel' variant="outline-primary pull-left" size="lg">Cancel</Button>
            </div>
            <div className='container cancel' style={{ textAlign: "right" }}>
                <Button className='continue' variant="secondary" size="lg" style={{ align: "right" }}>Continue</Button>
            </div> */}
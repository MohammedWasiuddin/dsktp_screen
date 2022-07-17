import React from 'react';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';

function Confirm(props) {
  // const navigate = useNavigate();

  return (
    <div>
      
      <div className='header'>
      <h5 className='name'>{props.name} </h5>
      <h6><b className='year' style={{float:"left"}}>Year: {props.year}</b> 
      <b className='id' style={{textAlign:"center"}}>Exchange Policy ID: {props.id}</b>
      <b className='plan' style={{float:"right"}}>Plan name: {props.plan}</b></h6>
      <div className='enrollees'>
    <label><h5>Enrollees (4)</h5></label>
    <select value="Enrollees">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</div>
<hr style={{ height: "3px" }}></hr>
      <h5 style={{ textAlign: "left",marginLeft:"3%"}}>Reason for action</h5>
      
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum</p>
      </div>

      <div className='container'>
                <Button className='back'
                    variant="outline-primary"
                    size="lg">Back</Button>
                <Button className='submit'
                    // variant="primary"
                    size="lg"
                    >Submit</Button>
            </div>
    </div>
  )
}

export default Confirm
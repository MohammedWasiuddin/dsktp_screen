import React from 'react'

function Header(props) {
  return (
    <>
    <div className='header'>
    <h5 className='name'>{props.name}</h5>
      <h6><b className='year' style={{float:"left"}}> Year: {props.year}</b>
      <b className='id' style={{textAlign:"center"}}>Exchange Policy ID: {props.id}</b> 
       <b className='plan' style={{float:"right"}}>Plan name: {props.plan}</b></h6>
    </div>

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
</>
  )
}

export default Header
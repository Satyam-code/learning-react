import React from 'react';
import './Person.css';
const person = (props)=>{
return(
    <div className="Person">
<p onClick={props.click}>Hello from {props.name}  {props.age} years old</p>
<p>{props.children} is passed</p>
<input type="text" onChange={props.change} />
    </div>

)
}

 export default person;
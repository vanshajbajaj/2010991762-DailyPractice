import React,{useState} from "react";
import "./Form.css";

const Form=()=>{

    const[name,setName]=useState('');
    const[pin,setPin]=useState('');

    return(

        <div>

            <label>Enter your name: </label><input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            <label>Enter your pin: </label><input type="text" value={pin} onChange={(e)=>setPin(e.target.value)} /><br/>
            <input type="submit" />
            
        </div>

    );

}

export default Form;
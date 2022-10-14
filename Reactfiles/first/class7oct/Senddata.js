import React from "react";
import Userdata from "./Userdata.json";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import fs from "fs";

const Senddata=()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("");

    function sendd(e){

        e.preventDefault();
        let raw = fs.readFileSync("./Userdata.json");
        let obj = {
            "Name": name,
            "Email": email,
            "mobile": mobile,
            "Address":address
        }
        raw.push(obj);
        let newRaw = JSON.stringify(raw);
        fs.writeFileSync("./Userdata.json", newRaw);

    }

    return(
        <div>
            <Table stripped bordered hover variant="light" size="sm" className="text-center">
                <tr>
                    <td><label>Enter name </label></td>
                    <td><input value={name} onChange={e=>setName(e.currentTarget.value)} type="text" id="name" /></td>
                </tr>
                <tr>
                    <td><label>Enter email </label></td>
                    <td><input value={email} onChange={e=>setEmail(e.currentTarget.value)} type="text" id="name" /></td>
                </tr>
                <tr>
                    <td><label>Enter mobile number </label></td>
                    <td><input value={mobile} onChange={e=>setMobile(e.currentTarget.value)} type="text" id="name" /></td>
                </tr>
                <tr>
                    <td><label>Enter address </label></td>
                    <td><input value={address} onChange={e=>setAddress(e.currentTarget.value)} type="number" id="name" /></td>
                </tr>
                <button id="sendd" onClick={sendd}>send data</button>
            </Table>
        </div>
    )

}

export default Senddata;
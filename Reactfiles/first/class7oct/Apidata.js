import React from "react";
import Userdata from "./Userdata.json";
import Table from 'react-bootstrap/Table'


const Apidata=()=>{

return(

    <div className="bg-secondary" style={{height:'40vh'}}>

        <h1 className="text-center font-italic text-dark">This is the data component</h1>

        <Table stripped bordered hover variant="dark" size="sm" className="text-center">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    Userdata.map((users,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{users.Name}</td>
                            <td>{users.Email}</td>
                            <td>{users.mobile}</td>
                            <td>{users.Address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

    </div>

);

}

export default Apidata;
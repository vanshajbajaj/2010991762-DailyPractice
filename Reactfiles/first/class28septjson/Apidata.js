import React from "react";
import Userdata from "./Userdata.json";
import Table from 'react-bootstrap/Table'


const Apidata=()=>{

return(

    <div className="bg-secondary" style={{height:'100vh'}}>

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
                            <th>{index+1}</th>
                            <th>{users.Name}</th>
                            <th>{users.Email}</th>
                            <th>{users.mobile}</th>
                            <th>{users.Address}</th>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

    </div>

);

}

export default Apidata;
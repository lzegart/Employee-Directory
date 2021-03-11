import React from "react";
import EmployeeDirectory from "../pages/EmployeeDirectory";

function Employee(props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <h2>{props.user.email}</h2>
            <h2>{props.user.phone}</h2>
        </div>
    )
}


export default Employee; 
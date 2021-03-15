import React from "react";
import EmployeeDirectory from "../pages/EmployeeDirectory";
import "./Employee.css";
import moment from "moment";

function Employee(props) {
    const dateOfBirth = moment(props.user.dob.date).format('MMMM Do YYYY')
    return (
        <div className="empRow">
            <img className="image" src={props.user.picture.thumbnail}/>
            <p className="name">{props.user.name.first} {props.user.name.last}</p>
            <p className="email">{props.user.email}</p>
            <p className="phone">{props.user.phone}</p>
            <p className="birthday">{dateOfBirth}</p>
        </div>
    )
}


export default Employee; 
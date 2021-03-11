import React, {useEffect, useState} from "react";
import API from "../utils/API";
import Employee from "../components/Employee";
import SearchEmp from "../components/SearchEmployee";



function EmployeeDirectory() {
    const [state, setState] = useState({ users: null })
    useEffect( () => {
        console.log("hello")
        API.getRandomUsers()
            .then(res => {
                console.log(res.data.results);
                setState({
                    users: res.data.results
                })
                console.log(state);
            })

    }, [])

    return (
        <div>
            EmployeeDirectory
                <SearchEmp></SearchEmp>
            {state.users.forEach(user => {
                <Employee user={user}></Employee>
            })}
        </div>
        
    )
}

export default EmployeeDirectory;
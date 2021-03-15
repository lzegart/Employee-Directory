import React, {useEffect, useState} from "react";
import API from "../utils/API";
import Employee from "../components/Employee";
import SearchEmp from "../components/SearchEmployee";



function EmployeeDirectory() {
    const [state, setState] = useState({ users: [], filterUsers: [] })
    useEffect( () => {
        console.log("hello")
        API.getRandomUsers()
            .then(res => {
                console.log(res.data.results);
                setState(
                    {users: res.data.results, filterUsers: res.data.results}
                )
                console.log(state);
            })

    }, [])
    function handleSearch() {
        const searchedUsers = state.users.filter(user => {
            if (user.name.first.includes("a"))
                return true
            else 
                return false     
        })
        setState(
            {
                ...state,
                filterUsers: searchedUsers
            }
        )
    }

    return (
        <div>
            <p>EmployeeDirectory</p>
            <div>
                <button onClick={handleSearch}>"Click Me"</button>
                {/* <SearchEmp></SearchEmp> */}
            </div>
            {state.filterUsers.map(user => {
                {console.log(user)}
                return <Employee user={user}></Employee>
            })}
            {console.log(state)}
        </div>
        
    )
}

export default EmployeeDirectory;
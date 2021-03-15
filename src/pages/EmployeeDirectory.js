import React, {useEffect, useState} from "react";
import API from "../utils/API";
import Employee from "../components/Employee";
import moment from "moment";



function EmployeeDirectory() {
    const [state, setState] = useState({ users: [], filterUsers: [] })
    useEffect( () => {
        // console.log("hello")
        API.getRandomUsers()
            .then(res => {
                // console.log(res.data.results);
                setState(
                    {users: res.data.results, filterUsers: res.data.results}
                )
                // console.log(state);
            })

    }, [])
    function sortByDOB() {
        const sortedUsers = state.users.sort((current, next) => {
            const currentDOB = moment(current.dob.date);
            const nextDOB = moment(next.dob.date);
            return nextDOB.diff(currentDOB)
        })
        setState(
            {
                ...state,
                filterUsers: sortedUsers
            }
        )
    }
    function sortByFirstName() {    
        const sortedUsers = state.users.sort((current, next) => {
            console.log(current, next)
            if (current.name.first < next.name.first) {
                return -1
            } else if (current.name.first > next.name.first) {
                return 1
            } else {
                return 0
            }
        })
        setState(
            {
                ...state,
                filterUsers: sortedUsers
            }
        )
    }
    function filterName(event) {
        console.log(event.target.value)
        const filteredUsers = state.users.filter((user) => {
        const userFullName = user.name.first + " " + user.name.last
            return userFullName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setState(
            {
                ...state,
                filterUsers: filteredUsers
            }
    )}

    return (
        <div>
            <p id="title">EmployeeDirectory</p>
            <div className="filters">
                <p>Please search employees by name, or use the sort buttons for ordered information.</p>
                <input onChange={filterName}></input>
                <button onClick={sortByFirstName}>Sort by First Name</button>
                <button onClick={sortByDOB}>Sort by Date of Birth</button>
            </div>

            {state.filterUsers.map(user => {
                // {console.log(user)}
                return <Employee user={user}></Employee>
            })}
            {/* {console.log(state)} */}
        </div>
        
    )
}

export default EmployeeDirectory;
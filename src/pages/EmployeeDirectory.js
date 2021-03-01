import React, {useEffect, useState} from "react";
import API from "../utils/API";



function EmployeeDirectory() {
    const [state, setState] = useState({})
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


        </div>
    )
}

export default EmployeeDirectory;
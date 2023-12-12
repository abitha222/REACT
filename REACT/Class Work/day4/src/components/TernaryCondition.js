import React,{useState} from 'react'
const TernaryCondition = () => {
    const[isLoggedin,setIsLoggedIn]=useState(false)
    const handleClick=()=> {
        setIsLoggedIn(!isLoggedin);
    }
    return (
        <div>
            {isLoggedin?
            <p>Home Page</p>:
            <p>Login Page</p>
             }
             <button onClick={handleClick}>Change State</button>
        </div>
    )
}
export default TernaryCondition;
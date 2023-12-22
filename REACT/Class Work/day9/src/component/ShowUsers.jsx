import React, { useState } from "react";
import axious from 'axios'
import{useEffect} from 'react';
const ShowUsers=()=>
{
    const[user,setUser]=useState([])

    useEffect(()=>
    {
        fetchusers();
    },[])
    const fetchusers = async()=>{
        try{
            const res= await axious.get("http://localhost:3000/posts")
            setUser(res.data)
            console.log(user)

        }catch(err){
            console.log(err);

        }
    }
    return(
        <div>
            <table>
                <thead>
                <tr>
                   <td>Id</td>
                   <td>Email</td>
                </tr>
                </thead>

            <tbody>
                {user.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.email}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            {/*} <button onClick={fetchusers}>Fetch</button>*/}
        </div>
    )
}
export default ShowUsers;
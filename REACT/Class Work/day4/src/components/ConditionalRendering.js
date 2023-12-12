import React, {useState} from 'react'
const ConditionalRendering = () => {
    const[value,setValue]=useState(true)
    if(value){
        return(
            <div>
                <p>True block</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>False block</p>
            </div>
        )
    }
}
export default ConditionalRendering;
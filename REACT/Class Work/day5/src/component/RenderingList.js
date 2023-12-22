import React from 'react';
const RenderingList=()=>{
    const fruits=[
        {id:1,name:"red"},
        {id:2,name:"pink"},
        {id:3,name:"black"},
    ];
    return(
        <div>
            <ol>
                {fruits.map((fruit,index)=>(
                    <li key={fruit.id}>{fruit.name}</li>
                ))}
            </ol>
        </div>
    )
}
export default RenderingList;
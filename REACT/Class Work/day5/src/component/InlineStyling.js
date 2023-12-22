import React from 'react';
import styled from "styled-components";
const InlineStyling=()=>{
const StyledButton=styled.button`
background-color:#3498db;
color:#ffffff;
Padding:10px 20px;
font-size:16px;
border:NoEncryption;
cursor:Pointer;
margin:50px;
&:hover{
    background-color:#2980b9;

}`
return(
    <div>
        <StyledButton>Login</StyledButton>
    </div>
)
}
export default InlineStyling;
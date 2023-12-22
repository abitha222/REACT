import React from "react";
import {Button,Container,Paper} from  "@mui/material";
const ButtonMUI=()=>{
    return <div>
        <Paper elevation={5}>
        <Button>button 1</Button>
        <Button variant="contained">variant contained</Button>
        <Button variant="outlined">variant outlined</Button>
        <Button variant="text">variant text</Button>
        <Button color="secondary">secondary color</Button>
        <Button color="primary" variant="contained">primary color</Button>
        <Button color="success">success color</Button>
        <Button color="error">error color</Button>
        </Paper>
        <Container>this is para in container</Container>
        </div>
};
export default ButtonMUI;
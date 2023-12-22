import React from 'react';
import { Grid,Paper} from '@mui/material';
const GridMUI=()=>{
    return(
      <div>
        <Paper elevation={5}>
           <Grid container spacing={5}>
        <Grid sx={{ backgroundColor: "white" }} item xs={4}>
            <h1>Grid -1</h1>
        </Grid>
        <Grid sx={{ backgroundColor: "blue" }} item xs={4}>
            <h1>Grid -2</h1>
        </Grid>
        <Grid sx={{ backgroundColor: "green" }} item xs={4}>
           <h1>Grid -3</h1>
        </Grid>
        <Grid sx={{ backgroundColor: "yellow" }} item xs={4}>
           <h1>Grid -4</h1>
        </Grid>
        </Grid>
        </Paper>
    </div>
    )
}
export default GridMUI;
import React, {FunctionComponent} from 'react';
import {Box} from "@mui/material";

const MainContainer: FunctionComponent=(props) =>{
    return (
        <Box>
            {props.children}
        </Box>
    );
}

export default MainContainer;

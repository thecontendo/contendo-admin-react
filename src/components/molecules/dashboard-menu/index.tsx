import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionAreaCard from "../../atoms/admin-card";
import {Container} from "@mui/material";
import {dashboardMenu} from "../../../models/dashboard-data";
import {IMenu} from "interfaces/global/IDashboard";


const DashboardMenu = () => {
    return (
        <Container maxWidth={false}>
            <Box mt={3}>
                <Grid container spacing={4}>
                    {
                        dashboardMenu.map((e: IMenu) => <Grid key={e.id} item xl={3} lg={4} md={6} xs={12}>
                            <ActionAreaCard  data={e}/>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    );
}

 export default DashboardMenu;

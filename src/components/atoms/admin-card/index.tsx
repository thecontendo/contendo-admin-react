import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar, Box, CardActionArea, Grid} from '@mui/material';
import {green} from "@mui/material/colors";
import { IMenuData} from "interfaces/global/IDashboard";
import {useNavigate} from "react-router-dom";
import Nav from 'utils/nav';

const ActionAreaCard = (props: IMenuData) => {
    const {title, description, icon, path} = props.data;
    const navigator = useNavigate();
    return (
        <Card onClick={() => {Nav.to(navigator, path)}}>
            <CardActionArea>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pb: 3
                        }}
                    >
                        <Grid container>
                            <Grid item xs>
                                <Typography
                                    color="textPrimary"
                                    variant="h5"
                                >
                                    {title}
                                </Typography>

                                <Typography

                                    variant="body1"
                                >
                                    {description}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Avatar sx={{bgcolor: green[500], height: '5rem', width: '5rem'}} variant="rounded" src={icon}/>
                            </Grid>
                        </Grid>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActionAreaCard;

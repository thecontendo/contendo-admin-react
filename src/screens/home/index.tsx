import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import SupportIcon from '@mui/icons-material/Support';
import {FunctionComponent} from "react";
import Logo from 'assets/svgs/clogo.svg';
import {useNavigate} from "react-router-dom";
import Nav from "../../utils/nav";
import path from "../../navigation/path";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));

const data = {
    upper: [
        {
            title: 'My Profile',
            icon: <ProfileIcon/>
        },
        {
            title: 'Settings',
            icon: <SettingsIcon/>
        }, {
            title: 'Support',
            icon: <SupportIcon/>
        }
    ],
    lower: [
        {
            title: 'Logout',
            icon: <LogoutIcon/>
        }
    ]
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Home: FunctionComponent = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigator = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar variant="dense">
                    <Box sx={{ width: 80, height: 40 }} onClick={()=>{Nav.to(navigator, path.home)}}>
                        <img
                            src={Logo}
                            srcSet={Logo}
                            alt={'Contendo'}
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ width: 20 }}/>
                    <Typography variant="h6" noWrap sx={{flexGrow: 1}} component="div">
                        Administration
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader/>
                {props.children}
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {data.upper.map((e) => (
                        <ListItem button key={e.title}>
                            <ListItemIcon>
                                {e.icon}
                            </ListItemIcon>
                            <ListItemText primary={e.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {data.lower.map((e) => (
                        <ListItem button key={e.title}>
                            <ListItemIcon>
                                {e.icon}
                            </ListItemIcon>
                            <ListItemText primary={e.title}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default Home;

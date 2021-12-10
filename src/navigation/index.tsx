import React from 'react';
import '../app/App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "screens/dashboard";
import Home from "screens/home";

function Navigation() {
    React.useEffect(() => {
        console.log('From navigation');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Routes>

            <Route path="/" element={<Dashboard/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
}

export default Navigation;

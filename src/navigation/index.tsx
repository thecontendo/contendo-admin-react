import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "screens/home";
import DashboardMenu from "components/molecules/dashboard-menu";

function Navigation() {
    return (
        <Home>
            <Routes>
                <Route path="/" element={<DashboardMenu/>}/>
            </Routes>
        </Home>
    );
}

export default Navigation;

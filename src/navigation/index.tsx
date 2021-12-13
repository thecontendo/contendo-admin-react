import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "screens/home";
import DashboardMenu from "components/molecules/dashboard-menu";
import Users from "components/molecules/users";
import Roles from "components/molecules/roles";
import path from "./path";


function Navigation() {
    return (
        <Home>
            <Routes>
                <Route path={path.home} element={<DashboardMenu/>}/>
                <Route path={path.users} element={<Users/>}/>
                <Route path={path.roles} element={<Roles/>}/>
            </Routes>
        </Home>
    );
}

export default Navigation;

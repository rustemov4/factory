import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes"
import Courses from '../pages/Courses';
import {Context} from "../index"
import Auth from '../pages/Auth';

const AppRouter = () => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )} 
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )} 
            <Route path="*" element={<Auth/>} />

        </Routes>
    )
}

export default AppRouter;
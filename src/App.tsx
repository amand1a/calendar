import React from 'react';
import style from './App.module.scss';

import {Route, Routes} from "react-router-dom";
import Calendar from "./components/lessons/calendar";
import Login from "./components/aboutMe/Login";
import Day from "./components/lessons/day/day";
import Header from "./components/header/header";

function App() {
    return (
        <div className={style.main}>

            <Header />
            <Routes>
                <Route path="login" element={ <Login/>}/>
                <Route path="/" element={ <Calendar/>}>
                    <Route path="/*" element={<Day/>}/>
                    <Route path={"/"} element={<Day/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

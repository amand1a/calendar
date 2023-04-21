import React, {FC} from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import {Breadcrumb, Col, ListGroup, Row, Table} from "react-bootstrap";
import style from "./calendar.module.scss";
import Day from "./day/day";
import ScrollBar from "./scrollBar/scrollBar";
import {Outlet} from "react-router-dom";


const Calendar:FC = () => {
    return (
        <div className={style.main}>
            <div className={style.sidebar}>
                <ScrollBar/>
            </div>
            <div className={style.lesson}>
                <Outlet/>
            </div>
        </div>
    );
};



export default Calendar;
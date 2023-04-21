import React, {FC, useEffect, useState} from 'react';
import style from "./scrollBar.module.scss";
import {Button, Nav, Table} from "react-bootstrap";
import  'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import {useAppSelector} from "../../../hooks/hooks";
import {setSDate} from "../../reducers/date";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import AddEvents from "../../modalWindow/addEvents";

const ScrollBar:FC = () => {
    const navigate = useNavigate();

    const SDate = useAppSelector(state => state.date.SDate)
    const [showAddEvents,setShowAddEvents] = useState(false)
    const [value, setValue] = useState(SDate)
    const [activeStartDate, onActiveStartDate] = useState(SDate)
    const dispatch = useDispatch()

    const setShowEvent =(par1:boolean):void=>{
        setShowAddEvents(par1)
    }

    useEffect(()=>{
       setValue(SDate)
        onActiveStartDate(SDate)
    },[SDate])

    useEffect(()=>{
        dispatch(setSDate(value))
        navigate(`/${SDate.getFullYear()}/${SDate.getMonth()}/${SDate.getDay()}`)
    },[value])

    const setDate =(value:Date)=>{
        setValue(value)
    }

    const onViewOrDateChange = ( {activeStartDate}:{activeStartDate:Date} ) => {
        onActiveStartDate(activeStartDate);
    };

    const onFullChange = (date:Date) => {
        setValue(date);
        onActiveStartDate(date);
    };


    return(<div>{showAddEvents && <AddEvents showAddEvents={showAddEvents} setShow={setShowEvent}/>}
        <Button className={"mb-1"} onClick={()=>{setShowAddEvents(true)}} variant="outline-primary">+ add event</Button>
        {// @ts-ignore}
        }<Calendar activeStartDate={activeStartDate} onActiveStartDateChange={onViewOrDateChange}  className={[style.calendar,style.MorePowerCss]}   value={value} onChange={onFullChange} /></div>)
};

export default ScrollBar;
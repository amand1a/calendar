import React, {FC, useEffect, useState} from 'react';
import style from "./header.module.scss";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useAppSelector} from "../../hooks/hooks";
import {useDispatch} from "react-redux";
import {setSDate} from "../reducers/date";
import Login from "../modalWindow/login";

interface Iheader{

}

const Header:FC<Iheader> = () => {

    const SelectDate = useAppSelector(state => state.date.SDate)
    const [showLogin,setShowLogin] = useState(false)
    const [value,setValue] = useState(SelectDate)
    const dispatch = useDispatch()

    useEffect(()=>{
        setValue(SelectDate)
    },[SelectDate])

    useEffect(()=>{
        dispatch(setSDate(value))
    },[value,dispatch])

    const today = ()=>{
        setValue(new Date())
    }

    const next =()=>{
        let localDate = new Date(value)
        localDate.setDate(localDate.getDate()+1)
        setValue(localDate)
    }
    const prev =()=>{
        let localDate = new Date(value)
        localDate.setDate(localDate.getDate()-1)
        setValue(localDate)
    }

    return (<>
            {showLogin && <Login setShowLogin={setShowLogin}/>}
        <Navbar fixed={'top'} bg={"light"}   className={style.main} variant="light">
            <Container><LinkContainer    to="/">
                <Navbar.Brand >Calendar
                </Navbar.Brand>
            </LinkContainer>
                <Button onClick={today}>Today</Button>
                <Container>
                    <Button variant="light" onClick={prev} >{"<"}</Button>
                    <Button variant="light" onClick={next} >{">"}</Button>
                    {value.toDateString()}

                </Container>

                <Nav className="me-auto">


                </Nav>
                <Button onClick={()=>{setShowLogin(true)}} variant="light">
                    login
                </Button >
            </Container>
        </Navbar>
        </>
    );
};

export default Header;
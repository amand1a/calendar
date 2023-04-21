import React, {FC} from 'react';
import {Button} from "react-bootstrap";
import styles from "./dayOfCalendar.module.scss"




const DayOfCalendar:FC = () => {
    debugger
    return (
        <Button className={styles.day} as={"td"}>{1}</Button>
    );
};

export default DayOfCalendar;
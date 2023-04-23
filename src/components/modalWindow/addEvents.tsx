import {TimePicker, LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, {FC, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/hooks";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {SubmitHandler, useForm} from "react-hook-form";


interface IAddEvents{
    showAddEvents: boolean,
    setShow:(arg1:boolean) => void
}

interface Inputs {
    startDate: Date,
    endDate: Date,
    event: string,
}

const AddEvents:FC<IAddEvents> = ({setShow,showAddEvents}:IAddEvents) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const startDate  = useAppSelector(state => state.date.SDate)
   const [startValue,setStartValue]=useState<Date|null>(startDate)
    const [endValue,setEndValue] =useState<Date|null>(startDate)
    const handleClose = () => {setShow(false)};

    const onSubmit:SubmitHandler<Inputs> =(data:Inputs)=>{
        alert(data.event)
    }
    return (
        <>

            <Modal show={showAddEvents} onHide={handleClose}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>event</Form.Label>

                        <Form.Control
                            {...register("event",{
                                required: "event is require",
                            })}
                            as="textarea"
                            rows={3}
                            placeholder="some event"
                            isInvalid={errors.event && true}

                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.event?.message}
                        </Form.Control.Feedback>

                    </Form.Group>
                    <LocalizationProvider  dateAdapter={AdapterDateFns}>
                        <TimePicker label={"start"} ampm={false} value={startValue} onChange={(date:Date|null)=>{setStartValue(date)}}/>
                        <> </>
                        <TimePicker label={"end"} ampm={false} value={endValue} onChange={(date:Date|null)=>{setEndValue(date)}}/>
                    </LocalizationProvider>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default AddEvents;
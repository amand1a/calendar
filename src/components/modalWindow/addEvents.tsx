import React, {FC} from 'react';
import {Button, Modal} from "react-bootstrap";


interface IAddEvents{
    showAddEvents: boolean,
    setShow:(arg1:boolean) => void
}

const AddEvents:FC<IAddEvents> = ({setShow,showAddEvents}:IAddEvents) => {


    const handleClose = () => {setShow(false)};
    return (
        <>

            <Modal show={showAddEvents} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddEvents;
import React, {FC, useRef, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import styles from "./login.module.scss";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {SubmitHandler, useForm} from "react-hook-form";

interface Ilogin {
    setShowLogin: (showLogin:boolean)=> void
}

type Inputs = {
    email: string,
    password: string,
    name: string,
};

const Login:FC<Ilogin> = ({setShowLogin}:Ilogin) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit:SubmitHandler<Inputs> = (data:Inputs) => {
        alert(data.email);
    };
    const [typeWindow,setTypeWindow] = useState<"Login"|"Registration">("Login");
    const [show, setShow] = useState(true);

    let resFromApi = ""
    const handleClose = () =>{
        setShowLogin(false)
        setShow(false)};


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{typeWindow}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.resFromApi}>
                        {errors.name?.message}
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <Form  onSubmit={handleSubmit(onSubmit)} >
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            {"rar"}
                            <Form.Control
                                {...register("email",{
                                    required: "email is required",
                                    pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message:"Email is not valid"}
                                })}
                                type="email"
                                placeholder="...@gmail.com"
                                autoFocus

                            />
                        </Form.Group>
                        {errors.email && <p className={styles.errMessage}>{errors.email.message}</p>}
                        { typeWindow ==="Registration" && <Form.Group  className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                {...register("name",)}
                            />
                        </Form.Group> }
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                {...register("password",{minLength:{value:6, message:"min lenght 6"}, required:"password is required"})}
                                type={"password"}
                            />
                        </Form.Group>
                        {errors.password && <p className={styles.errMessage}>{errors.password.message}</p>}
                        {typeWindow === "Registration"?
                            <Button  variant="primary" onClick={()=>{setTypeWindow("Login")}}>login</Button>:
                            <Button  variant="primary" onClick={()=>{setTypeWindow("Registration")}}>create account</Button>}
                        <Button type="submit"  variant="success" >Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
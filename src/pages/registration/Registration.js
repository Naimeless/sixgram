import React, {useState, useEffect} from "react";
import "../authorization/Authorization.css";
import "../registration/Registration.css"
import iconSixGram from "../header/icon/font.png";

import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Registration(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('The field cannot be empty!');
    const [passwordError, setPasswordError] = useState('The field cannot be empty!');
    const [formValue, setFormValue] = useState(false);

    useEffect(() => {
        if(emailError || passwordError){
            setFormValue(false)
        }else{
            setFormValue(true)
        }

    }, [emailError, passwordError])

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect email')
        } else{
            setEmailError("")
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError('Password must be at least 8 characters')
            if(!e.target.value){
                setPasswordError('The field cannot be empty!')
            }
        }else{
            setPasswordError("")
        }
    }

    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return(
        <div className="authorization__div">
            <Form className="authorization__block"> 
                <Form.Group className="authorization__block-style">
                    <Form.Group className="authorization__block-style-label">
                        <img className="authorization__block-style-label-view" src={ iconSixGram }/>
                    </Form.Group>
                    <div className="authorization__div-fields">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {(emailDirty && emailError) ? <div style={{color: 'red'}}>{emailError}</div> : 'Email address'}
                            <Form.Control onChange={e => emailHandler(e)} value={email} onBlur={e => {blurHandler(e)}} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <div className="userName__div">
                                <div>
                                    <Form.Label>Your username</Form.Label>
                                </div>
                                <div className="userName__div-fields">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <div className="userName__div-fields-user">
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {(passwordDirty && passwordError) ? <div style={{color: 'red'}}>{passwordError}</div> : 'Password'}
                            <Form.Control onChange={e => passwordHandler(e)} value={password} onBlur={e => {blurHandler(e)}} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to = "/" className="userName__div-fields-button">
                            <Button disabled = {!formValue} variant="primary">Sign up</Button>
                        </Link>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Registration
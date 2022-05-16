import React from "react";
import "../authorization/Authorization.css";
import "../registration/Registration.css"
import iconSixGram from "../header/icon/font.png";
import { ApiRegistration } from "../../api/ApiRegistration";

import { Form, Button, InputGroup } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Registration(){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    const regAge = /^(?:1(?:00?|\d?)|[2-5]\d?|[6-9]\d?|0)$/

    const schema = yup.object().shape({
        password: yup.string()
            .required('No password provided.') 
            .min(8, 'Password must contain at least 8 characters.'),
        email: yup.string()
            .matches(re, 'Incorrect email.')
            .required('Email address'),
        userName: yup.string()
            .matches(/[a-zA-Z]/, 'Nick can only contain Latin letters.')
            .required('Your username'),
        // age: yup.string()
        //     .matches(regAge, 'Nick can only contain Latin letters.')
        //     .required('Your age'),
      })

      const { handleSubmit, control, watch, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
      })

    const onSubmit = (data) => {
        ApiRegistration('http://192.168.0.122:85/api/v1/auth/register', data)
            .then((data) => {
            console.log(data);
        });
    }

    return(
        <div className="authorization__div">
            <Form className="authorization__block" onSubmit={handleSubmit(onSubmit)}> 
                <Form.Group className="registration__block-style">
                    <Form.Group className="authorization__block-style-label">
                        <img className="authorization__block-style-label-view" src={ iconSixGram }/>
                    </Form.Group>
                    <div className="authorization__div-fields">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={''}
                                rules={{ required: true }}
                                render={({ field: { value, onChange }, fieldState: { error } }) =>
                                    (<>
                                    {
                                        error ? <div style={{color: 'red'}}>{error?.message}</div> : 'Email address'
                                    }
                                        <Form.Control
                                            type='email'
                                            value={value}
                                            onChange={onChange}
                                            placeholder="Enter email"
                                        />
                                    </>)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Controller
                                name="age"
                                control={control}
                                defaultValue={''}
                                rules={{ required: true }}
                                render={({ field: { value, onChange }, fieldState: { error } }) =>
                                    (<>
                                    {
                                        error ? <div style={{color: 'red'}}>{error?.message}</div> : 'Your age'
                                    }
                                    <Form.Control
                                        value={value}
                                        onChange={(e) => {
                                            const value = e.currentTarget.value
                                            if (regAge.test(value) || !value.length){
                                                onChange(value)
                                            }
                                        }}
                                        placeholder="Age"/>
                                    </>)
                                }
                            />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <div className="userName__div">
                                <Controller
                                    name="userName"
                                    control={control}
                                    defaultValue={''}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange }, fieldState: { error } }) =>
                                    (<>
                                        {
                                            error ? <div style={{color: 'red'}}>{error?.message}</div> : 'Your username'
                                        }
                                            <Form.Control
                                                value={value}
                                                onChange={onChange}
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </>)
                                    }
                                />
                            </div>
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue={''}
                                rules={{ required: true }}
                                render={({ field: { value, onChange }, fieldState: { error } }) =>
                                    (<>
                                    {
                                        error ? <div style={{color: 'red'}}>{error?.message}</div> : 'Password'
                                    }
                                    <Form.Control
                                        value={value}
                                        onChange={onChange}
                                        type="password"
                                        placeholder="Password"/>
                                    </>)
                                }
                            />
                        </Form.Group>
                        <div className="registration__block-style-button">
                            <Button variant="primary" type="submit">Sign up</Button>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Registration
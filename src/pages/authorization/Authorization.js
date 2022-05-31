import React from "react";
import "../authorization/Authorization.css";
import iconSixGram from "../header/icon/font.png";
import "../registration/Registration.css";
import {ApiAuthorization} from "../../api/ApiAuthorization"
import { Form, Button } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import createTokenExpiration from "../../utils/createTokenExpiration";

import { Link } from "react-router-dom";
import setCookie from "../../utils/setCookie";

export const Authorization = ({setIsLoggenIn}) => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    const schema = yup.object().shape({
        password: yup.string()
            .required('No password provided.') 
            .min(8, 'Password must contain at least 8 characters.'),
        emailOrUserName: yup.string()
            .matches(/[a-zA-Z]/, 'Nick can only contain latin letters.')
            .required('Your username'),
      })

    const { handleSubmit, control, watch, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
      })

    const onSubmit = (data) => {
        ApiAuthorization('http://192.168.0.122:85/api/v1/auth/login', data)
            .then((res) => {
                console.log(res);
                setCookie('nameUser', data.emailOrUserName)
                createTokenExpiration(res, true);
                setIsLoggenIn(true);
                
        })
        .catch((e) => {
            alert(e.message)
        })
    }

    return(
        <div className="authorization__div">
            <Form className="authorization__block" onSubmit={handleSubmit(onSubmit)}> 
                <Form.Group className="authorization__block-style">
                    <Form.Group className="authorization__block-style-label">
                        <img className="authorization__block-style-label-view" src={ iconSixGram }/>
                    </Form.Group>
                    <div className="authorization__div-fields">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Controller
                            name="emailOrUserName"
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
                        </Form.Group>
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
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button type="submit">Sign in</Button>
                    </div>
                    <div className="authorization__block-links">
                        <Link to='/registration'>
                            <Button variant="link">No account? Register!</Button>
                        </Link>
                        <div className="authorization__block-links-password">
                            <Button variant="link">Forgot your password?</Button>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}
import React from "react";
import './User.css';
import { Col } from "react-bootstrap";

export const UserInformation = ({
    photo
}) => {
    return(
        
        <Col style={ { padding: '0', display: 'flex', margin: '3rem'} } sm={6} xs={5} md={8} lg={3}>
            
            <img className="image" src={photo}/>

        </Col>
    )
}
import React from "react";
import './User.css';
import { Col } from "react-bootstrap";

export const UserInformation = ({
    photo
}) => {
    return(
        
        <Col style={ { width: '98rem', display: 'flex', padding: '1rem'} } xs={2} md={3} lg={3}>
            
            <img className="image" src={photo}/>

        </Col>
    )
}
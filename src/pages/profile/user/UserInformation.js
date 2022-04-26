import React from "react";
import './User.css';
import { Col } from "react-bootstrap";

export const UserInformation = ({
    photo
}) => {
    return(
        
        <Col style={ { paddingLeft: '2.8rem', width: '98rem', display: 'flex'} } xs={2} md={3} lg={3}>
            
            <img className="image" src={photo}/>

        </Col>
    )
}
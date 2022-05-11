import React from "react";
import { UserImage } from "./UserImage";

import P from '../photo/photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Row } from "react-bootstrap";

  
function User(){м

    return(
        <>
        <div className="profile">
            <div className="avatar">
                <img src={P}/>
            </div>

            <div className="information">
                <div className="user">
                    <h2 className="user_name">Ventissa <FontAwesomeIcon className="tools" icon={faGear} /></h2>
                    <p>Subscribes: 20</p>
                    <p>Subscriptions: 15</p>
                    <p>Description: "Into the wind!"</p>
                </div>
            </div>

        </div>

            <Row>
                <UserImage/>
            </Row>
        </>
    )
}

export default User
import React from "react";
import { UserImage } from "./UserImage";
import Settings from "../settings/Settings";

import P from '../photo/photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Row } from "react-bootstrap";

  
function User(){

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <div className="profile">
            <div className="avatar">
                <img src={P}/>
            </div>

            <div className="information">
                <div className="user">
                    <h2 className="user_name">Ventissa <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setModalShow(true)} className="tools" icon={faGear} /></h2>
                    <p style={{fontFamili: 'system-ui'}}>Subscribes: 20</p>
                    <p>Subscriptions: 15</p>
                    <p>Description: "Into the wind!"</p>
                </div>
            </div>

        </div>

            <Row style={{justifyContent: 'center'}}>
                <UserImage/>
            </Row>

            <>
        <Settings
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
        </>
    )
}

export default User
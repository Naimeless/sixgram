import React from "react";
import { UserImage } from "./UserImage";
import Settings from "../settings/Settings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Row } from "react-bootstrap";
import getCookie from "../../../utils/getCookie";
import avatarSave from "../settings/avatarSave";
    
const User = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const nameUser = getCookie('nameUser');
    // const avatarUser = avatarSave();

    return(
        <>
            <div className="profile">
                <div className="avatar">
                    {/* {avatarUser} */}
                </div>

                <div className="information">
                    <div className="user">
                        <h2 className="user_name">{nameUser}<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setModalShow(true)} className="tools" icon={faGear} /></h2>
                        <p style={{fontFamili: 'system-ui'}}>Subscribes: 20</p>
                        <p>Subscriptions: 15</p>
                        <p>Description: "Into the wind!"</p>
                    </div>
                </div>

            </div>

            <Row style={{justifyContent: 'center', margin: '0'}}>
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
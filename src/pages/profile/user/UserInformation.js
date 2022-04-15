import React from "react";
import UserImage from "./UserImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import './User.css';
import P from '../photo/photo.jpg'

function UserInformation(){
    return(
        <div>
            <div className="profile">

                <div className="photo">
                    <img src={P}/>
                </div>

                <div className="information">
                    <div className="user">
                        <h2 className="hh">Ventissa <FontAwesomeIcon className="imgg" icon={faGear} /></h2>
                        <p>Подписчики: 20</p>
                        <p>Подписки: 15</p>
                        <h3>Описание: "Лети, ветерок!"</h3>
                    </div>
                </div>

                <UserImage/>

            </div>
        </div>
    )
}

export default UserInformation;
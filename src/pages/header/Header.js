import React from "react";
import iconSixGram from '../header/icon/font.png';
import "../header/Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";
import UploadImages from "./Upload image/UploadImages"

function NewsHeader(){

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <Row className="block-header m-0">
            <Col xs={3}>
                <img className="block-header__title" src={ iconSixGram }/>
            </Col>
            <Col xs={6} className="d-flex flex-column align-items-end">
                <div className="div-search">
                    <input className="div-search__input" placeholder="search..."></input>
                    <button className="div-search__button">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </Col>
            <Col xs={3}>
                <div className="block-icon">
                    <Link to="/" className="block-icon__div">
                        <FontAwesomeIcon className="block-icon__div-size" icon={faBarChart} />
                    </Link>
                    <div className="block-icon__div">
                        <FontAwesomeIcon className="block-icon__div-size" icon={faComments} />
                    </div>
                    <div className="block-icon__div">
                        <FontAwesomeIcon className="block-icon__div-size" icon={faImages} onClick={() => setModalShow(true)}/>
                        <UploadImages show={modalShow} onHide={() => setModalShow(false)}/>
                    </div>
                    <div className="block-icon__div">
                        <FontAwesomeIcon className="block-icon__div-size" icon={faBell} />
                    </div>
                    <Link to= "/profile" className="block-icon__div">
                        <FontAwesomeIcon className="block-icon__div-size" icon={faUser} />
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default NewsHeader
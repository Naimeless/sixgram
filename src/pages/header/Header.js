import React from "react";
import iconSixGram from '../header/icon/font.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom'
import "../header/Header.css";

function NewsHeader(){
    return(
        <div className="hat">
            <img className="header-title" src={ iconSixGram }/>
            <div className="div-search">
                <input className="search" placeholder="search..."></input>
                <button className="search-button">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="icon">
                <Link to="/" className="icon-div"><FontAwesomeIcon className="icon-header" icon={faBarChart} /></Link>
                <div className="icon-div"><FontAwesomeIcon className="icon-header" icon={faComments} /></div>
                <div className="icon-div"><FontAwesomeIcon className="icon-header" icon={faImages} /></div>
                <div className="icon-div"><FontAwesomeIcon className="icon-header" icon={faBell} /></div>
                <Link to= "/profile" className="icon-div"><FontAwesomeIcon className="icon-header" icon={faUser} /></Link>
            </div>
        </div>
    )
}

export default NewsHeader
import React from "react";
import iconSixGram from '../header/icon/font.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import "../header/Header.css";

function NewsHeader(){
    return(
        <div className="hat">
            <img className="headerTitle" src={ iconSixGram }/>
            <div className="divSearch">
                <input className="search" placeholder="search..."></input>
                <button className="searchButton">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="icon">
                <Link to="/" className="iconDiv"><FontAwesomeIcon className="iconHeader" icon={faBarChart} /></Link>
                <div className="iconDiv"><FontAwesomeIcon className="iconHeader" icon={faComments} /></div>
                <div className="iconDiv"><FontAwesomeIcon className="iconHeader" icon={faImages} /></div>
                <div className="iconDiv"><FontAwesomeIcon className="iconHeader" icon={faBell} /></div>
                <Link to= "/profile" className="iconDiv"><FontAwesomeIcon className="iconHeader" icon={faUser} /></Link>
            </div>
        </div>
    )
}

export default NewsHeader
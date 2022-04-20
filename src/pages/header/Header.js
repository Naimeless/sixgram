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

import { Routes, Route, Link } from 'react-router-dom'

function NewsHeader(){
    return(
        <div className="block-header">
            <img className="block-header__title" src={ iconSixGram }/>
            <div className="div-search">
                <input className="div-search__input" placeholder="search..."></input>
                <button className="div-search__button">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className="block-icon">
                <Link to="/" className="block-icon__div">
                    <FontAwesomeIcon className="block-icon__div-size" icon={faBarChart} />
                </Link>
                <div className="block-icon__div">
                    <FontAwesomeIcon className="block-icon__div-size" icon={faComments} />
                </div>
                <div className="block-icon__div">
                    <FontAwesomeIcon className="block-icon__div-size" icon={faImages} />
                </div>
                <div className="block-icon__div">
                    <FontAwesomeIcon className="block-icon__div-size" icon={faBell} />
                </div>
                <Link to= "/profile" className="block-icon__div">
                    <FontAwesomeIcon className="block-icon__div-size" icon={faUser} />
                </Link>
            </div>
        </div>
    )
}

export default NewsHeader
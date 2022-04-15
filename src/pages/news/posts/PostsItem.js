import React from "react";
import './/Posts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

export const PostsItem =({
    user,
    photo,
    liked,
    likePost
}) => {

    const heartFill = liked ? 'red' : 'black';

    return(
        <div className="news-block">
            <div className="user-block">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon-user" icon={faUser} />
                </div>
                <div className="name-user-block">
                    {user}
                </div>
            </div>
            <div className="photo-block">
                <img className="photo-block" src={ photo }/>
            </div>
            <div className="marks-block">
                <div className="div-marks">
                    <div className="marks">likes:</div>
                </div>
                <div className="div-marks">
                    <p className="marks">comments:</p>
                </div>
                <div className="button-comment">
                    <FontAwesomeIcon className="icon-button" icon={faComment} />
                </div>
                <div className="button-like">
                    <FontAwesomeIcon onClick={likePost} style={{color: heartFill}} className="icon-button" icon={faHeart} /> 
                </div>
            </div>
        </div>
    )
}
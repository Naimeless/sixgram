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
        <div className="newsBlock">
            <div className="userBlock">
                <div className="iconBlock">
                    <FontAwesomeIcon className="iconUser" icon={faUser} />
                </div>
                <div className="nameUserBlock">
                    {user}
                </div>
            </div>
            <div className="photoBlock">
                <img className="photoBlock" src={ photo }/>
            </div>
            <div className="marksBlock">
                <div className="divMarks">
                    <div className="marks">likes:</div>
                </div>
                <div className="divMarks">
                    <p className="marks">comments:</p>
                </div>
                <div className="buttonComment">
                    <FontAwesomeIcon className="iconButton" icon={faComment} />
                </div>
                <div className="buttonLike">
                    <FontAwesomeIcon onClick={likePost} style={{color: heartFill}} className="iconButton" icon={faHeart} /> 
                </div>
            </div>
        </div>
    )
}
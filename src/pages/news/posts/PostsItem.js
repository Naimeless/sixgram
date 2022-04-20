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
            <div className="news-block__basic">
                <div className="news-block__basic-user">
                    <div className="news-block__basic-user-icon">
                        <FontAwesomeIcon className="news-block__basic-user-icon-picture" icon={faUser} />
                    </div>
                    <div className="news-block__basic-user-name">
                        {user}
                    </div>
                </div>
                <div className="photo-block">
                    <img className="photo-block" src={ photo }/>
                </div>
                <div className="marks-block">
                    <div className="marks-block__div">
                        <div className="marks-block__div-icon">likes:</div>
                    </div>
                    <div className="marks-block__div">
                        <p className="marks-block__div-icon">comments:</p>
                    </div>
                    <div className="marks-block__button-comments">
                        <FontAwesomeIcon className="marks-block__button-icon" icon={faComment} />
                    </div>
                    <div className="marks-block__button-likes">
                        <FontAwesomeIcon onClick={likePost} style={{color: heartFill}} className="marks-block__button-icon" icon={faHeart} /> 
                    </div>
                </div>
            </div>
            <div className="time-block">
                <p className="time-block__post">April 20, 2022</p>
            </div>
        </div>
    )
}
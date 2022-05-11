import React from "react";
import './/Posts.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import { Col } from "react-bootstrap";
import {Comments} from "../comments/Comments";

export const PostsItem =({
    user,
    photo,
    liked,
    date,
    likePost
}) => {

    const heartFill = liked ? 'red' : 'black';
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <div className="news-block">
                <div className="news-block__basic">
                    <div className="news-block__basic-user">
                        <Col xs={4} className="d-flex flex-row">
                            <div className="news-block__basic-user-icon">
                                <FontAwesomeIcon className="news-block__basic-user-icon-picture" icon={faUser} />
                            </div>
                            <div className="news-block__basic-user-name">
                                {user}
                            </div>
                        </Col>
                    </div>
                    <div className="photo-block">
                        <img className="photo-block" src={ photo }/>
                    </div>
                    <div className="marks-block">
                        <Col xs={4} className="marks-block__div-general">
                            <div className="marks-block__div">
                                <div className="marks-block__div-text">likes: 123</div>
                            </div>
                            <div className="marks-block__div">
                                <div className="marks-block__div-text">comments: 44</div>
                            </div>
                        </Col>
                        <Col xs ={2} className="marks-block__div-general">
                            <div className="marks-block__button-comments">
                                <FontAwesomeIcon className="marks-block__button-icon" onClick={() => setModalShow(true)} icon={faComment}/>
                            </div>
                            <div className="marks-block__button-likes">
                                <FontAwesomeIcon onClick={likePost} style={{color: heartFill}} className="marks-block__button-icon" icon={faHeart} /> 
                            </div>
                        </Col>
                    </div>
                </div>
                <div className="time-block">
                    <div className="time-block__post">{date}</div>
                </div>
            </div>
            <>
                <Comments
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        </> 
    )
}
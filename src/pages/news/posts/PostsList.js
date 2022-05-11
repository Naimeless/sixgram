import React, { Component } from "react";
import {PostsItem} from "./PostsItem.js";
import {posts} from "../../../utils/constants.js";
import { Col } from "react-bootstrap";

export class PostsList extends Component{
    state ={
        blogArr: posts,
    };

    likePost = pos => {
        const temp = [...this.state.blogArr];
        temp[pos].liked = !temp[pos].liked;

        this.setState({
            blogArr: temp
        })
    }

    render(){
        const blogPosts = this.state.blogArr.map((item, pos)=>{
            return(
               <PostsItem key={item.id} 
                user={item.user}
                photo={item.photo} 
                liked={item.liked}
                date={item.date} 
                likePost ={() => this.likePost(pos)}
                hidePost={this.hidePost}
                />
            );
        });

        return(
            <>
                <Col xs={6}>
                    {blogPosts}
                </Col>
            </>
        )
    };
}

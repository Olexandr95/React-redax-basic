import React from "react";
import PostsF from "./posts";
import { useSelector } from "react-redux";
import { postsSelector } from "../../redax/postsRuducer";
import PostForm  from './postForm'

export default function MapPosts (){
    const post = useSelector(postsSelector);
    console.log(post)
    return (
        <div>
            <div>
                <PostForm/>
            </div>
            {post.map((user, i) => {
                return <PostsF post={user[i]} key={i} />
            })}
        </div>
    )
};


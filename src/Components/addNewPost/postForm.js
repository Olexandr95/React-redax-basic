import React, { useReducer, useState } from "react";
import './form.scss';
import {autorList} from './autSelect';
import { connect } from "react-redux";
import { createPost } from "../../redax/actions";
import { useSelector, useDispatch } from "react-redux";
import { postsSelector, usersSelector } from "../../redax/postsRuducer";


const PostForm = () =>{
    const [selectUser, setSelectUser] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [inputContent, setInputContent] = useState('');

    const posts = useSelector(postsSelector);
    const users = useSelector(usersSelector);
    const id = posts.length-1;
    const { Obi_Wan_Kenobi, Anakin_Skywalker } = users;

    const dispatch = useDispatch();


    const handleSelectUser = (e) =>{
        setSelectUser(e.target.value)
        console.log(selectUser)
        console.log(e.target.value)
    }
    const handleSelectImage = (e) =>{
        setInputImage(e.target.value)
    }
    const handleSelectContent = (e) =>{
        setInputContent(e.target.value)
        
    }
    
    //const findUser = Object.keys(users).filter((el)=>el==selectUser).toString()
    //const filterUsers = Object.keys(users).filter((users,el)=>users,el==findUser).toString()
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        

         /*console.log(findUser)
         console.log(filterUsers)
        dispatch(createPost(id, inputContent, inputImage, users.findUser.userPhoto, findUser.userName, findUser.userNickName))
        console.log(posts)*/

        if (selectUser === "Obi_Wan_Kenobi") {
            dispatch(createPost(id, inputContent, inputImage, Obi_Wan_Kenobi.userPhoto, Obi_Wan_Kenobi.userName, Obi_Wan_Kenobi.userNickName));
        } else {
            dispatch(
                createPost(id, inputContent, inputImage, Anakin_Skywalker.userPhoto, Anakin_Skywalker.userName, Anakin_Skywalker.userNickName)
            );
        
    };
    }
        return (
            <div className="conteiner">
            <form >
                <div className="flex-column">
                <h1>Post Form</h1>
                <div className="flex-space">
                    <label htmlFor="Author">Choise your User </label>
                    <select defaultValue={'Anakin_Skywalker'} className="option" onChange={handleSelectUser}>
                        <option >Anakin_Skywalker</option>
                        <option >Obi_Wan_Kenobi</option>
                    </select>
                </div>
                <div className="flex-space">
                    <label htmlFor="image">Paste link for IMG</label>
                    <input type='text'
                    name="image" 
                    id='image' 
                    className="content-input"
                    onChange={handleSelectImage}></input>
                </div>
                <div className="flex-space">
                    <label htmlFor="content"> Put your content</label>
                    <input 
                    type='text'
                    name="content" 
                    id='content' 
                    className="content-input"
                    onChange={handleSelectContent}
                    ></input>
                </div>
                <div className="post-btn">
                    <button className="post-new-btn"  type="Submit" onClick={handleSubmit}>Create Post</button>
                </div>
                </div>
            </form>
            </div>
        )
    }




export default PostForm
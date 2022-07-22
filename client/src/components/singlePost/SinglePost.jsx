import { Link } from "react-router-dom";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import {useEffect , useState} from "react";
// import React from "react";

export default function SinglePost() {

  const location = useLocation();
  const path =location.pathname.split("/")[2];

  const [post , setPost] = useState({})

useEffect(()=>{
  const getPost = async()=>{
    const res = await axios.get("/posts/"+path)
   setPost(res.data);
  //  console.log(post);
  //  console.log(path)
  }
  getPost();
} , [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

        {post.photo &&(
          <img
          src={post.photo}
          alt=""
          className="singlePostImg"
          />
        )}
        
        
        <h1 className="singlePostTitle">
       {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            
            <Link to={`/?user=${post.username}`} className="link">
            <b>
               {post.username}
            </b>
            </Link>
            
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

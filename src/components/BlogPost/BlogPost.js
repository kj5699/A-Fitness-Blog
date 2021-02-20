import React, { Component, useEffect, useState } from 'react';
import classes from './BlogPost.module.css';
import Card from '../UI/Card/Card';


import PostData from '../../data/blog.json';
const BlogPost = props => {
    const [Post,setPost]=useState({
        id: "",
            blogCategory: "",
            blogTitle: "",
            slug: "",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText: ""
        })
        const [PostId,setPostId]=useState(null)

    useEffect(
        ()=>{
        const postId=props.match.params.postid
        const post= PostData.data.find(p=> p.id==postId)
        setPost(post)
        setPostId(postId)
        
    },[props,Post,PostId])



    if (Post.blogImage==='')  return null
    console.log(Post.blogImage)
    const imagePath =require('../../assets/blogPostImages/'+ Post.blogImage).default
    console.log(imagePath)


    
    return(
        <Card style= {{ width : '70%'}} >
        <div className={classes.BlogPostContainer}> 
             <div className= {classes.BlogHeader}>
                   <span className={classes.Category} >{Post.blogCategory}</span>
                   <h1 className={classes.Title}> {Post.blogTitle}</h1>
                   <span className={classes.PostDetail}>Posted On  <strong>{Post.postedOn}</strong> by {Post.author}</span>
            </div>
                
            <div className={classes.PostImageContainer}>
                <img src={imagePath} alt='post' />
            </div>

            <div className={classes.PostContent}>
                     <h3>{Post.blogTitle}</h3>
                     <p>
                        
                        { Post.blogText }
                     </p>
                     <p>
                        
                        { Post.blogText }
                     </p>
                     <p>
                        { Post.blogText }
                     </p>
            </div>
       </div>


        </Card>
    )
};

export default BlogPost;
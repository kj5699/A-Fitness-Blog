import React, { useEffect, useState } from 'react';
import classes from './Sidebar.module.css';
import Card from '../UI/Card/Card';
import profileImage from '../../assets/profileImage/profileImage.jpeg'
import PostData from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = props => {
    const [Posts, setPosts]=useState([])

    useEffect(()=>{
        const posts= PostData.data
        setPosts(posts)
    },[Posts])

    return(
        <div style={{width: props.width}}>
            <Card style={{marginBottom: '20px' , boxSizing :'border-box', padding:'20px'}}>
                <div className={classes.cardHeader}>
                    <span>About Us</span>
                </div>
                <div className={classes.profileImage}>
                    <img src={profileImage} alt='profileImage'></img>
                </div>
                <div className={classes.cardBody}>
                    <p> My Name is Jatin Khemchandani. I am a software developer. My passion is creating amazing websites and applications</p>
                </div>

            </Card>

            <Card style={{marginBottom: '20px' , boxSizing :'border-box', padding:'20px'}}>
                <div className={classes.cardHeader}>
                    <span>Social Network</span>
                </div>

            </Card>

            <Card style={{marginBottom: '20px' , boxSizing :'border-box', padding:'20px'}}>
                <div className={classes.cardHeader}>
                    <span>Recent Posts</span>
                </div>
                <div className={classes.RecentPosts}>
                    {Posts.map(post=>{
                        return(
                            <NavLink to={`/post/${post.id}`} key={`/post/${post.id}`} >
                                <div className={classes.RecentPost}>
                                    <h3> {post.blogTitle}</h3> 
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                        )
                    })}

                </div>
                
            </Card>
        </div>

    )
};
export default Sidebar;
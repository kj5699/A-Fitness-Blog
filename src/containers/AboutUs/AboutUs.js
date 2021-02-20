import React , { useEffect, useState} from 'react';
import Card from '../../components/UI/Card/Card';
import classes from './AboutUs.module.css';
import profileImage from '../../assets/profileImage/profileImage.jpeg'
import PostData from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import SMLinks from '../../components/SocialMediaLinks/SMLinks';


const AboutUs =props=> {

        const [Posts, setPosts]=useState([])

        useEffect(()=>{
            const posts= PostData.data
            setPosts(posts)
        },[Posts])
        return(

            <div className= {classes.AboutUs}>
                <div className={classes.CardWrapper}> 
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
                </div>
                <div className={classes.CardWrapper}> 
                    <Card style={{marginBottom: '20px' , boxSizing :'border-box', padding:'20px'}}>
                        <div className={classes.cardHeader}>
                            <span>Social Network</span>
                        </div>
                        <div style={{padding: '50px 10px'}}>
                            <SMLinks />

                        </div>

                    </Card>
                </div>
                <div className={classes.CardWrapper}> 
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

               
                
                
            </div>
        )
    
}

export default AboutUs;
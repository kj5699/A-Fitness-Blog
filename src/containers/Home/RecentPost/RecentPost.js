import React from 'react';
import classes from './RecentPost.module.css';
import Card from '../../../components/UI/Card/Card';
import PostData from '../../../data/blog.json';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';

const RecentPost = props => {
    return(
        <div>{
            PostData.data.map(Post=>{
                const postText= Post.blogText.slice(0,200) + '...'
                return(
                    <Card style={{width:props.width}}>
                        <div className={classes.BlogPostContainer}> 
                            <div className= {classes.BlogHeader}>
                                <span className={classes.Category} >{Post.blogCategory}</span>
                                <h1 className={classes.Title}> {Post.blogTitle}</h1>
                                <span className={classes.PostDetail}> Posted By: {Post.author}, Posted On: {Post.postedOn}</span>
                            </div>
                            <div className={classes.PostBody}>
                                
                                <div className={classes.PostImageContainer}>
                                    <img src={require(`../../../assets/blogPostImages/${Post.blogImage}`).default} alt='post' />
                                </div>
                                <section>
                                    <div className={classes.PostContent}>
                                            <p>
                                                { postText }
                                            </p>
                                    </div>

                                    <NavLink to={`/post/${Post.id}`}> <Button buttonStyle='ReadMore'> Read More</Button></NavLink>
                                </section>
                            </div>
                        </div>
                    </Card>

                )
            })
        }
        </div>


        
    
    )
};

export default RecentPost;
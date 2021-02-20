import React , {Component} from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/SideBar/Sidebar';
import classes from './Post.module.css';



class Post extends Component{


    render(){
        
        return(
            <section className= {classes.container}>
                <BlogPost {...this.props}></BlogPost> 
                <Sidebar width='27%'></Sidebar>

            </section>
        )
    }
}

export default Post;
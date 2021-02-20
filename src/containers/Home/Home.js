import React , {Component} from 'react';
import ImageGalary from '../../components/ImageGalary/ImageGalary';
import Card from '../../components/UI/Card/Card';
import classes from './Home.module.css';
import PostData from '../../data/blog.json'
import RecentPost from './RecentPost/RecentPost';
import Sidebar from '../../components/SideBar/Sidebar';

class Home extends Component{
    render(){
        const ImageArray= PostData.data.map(post=>post.blogImage)
        return(
            <div className= {classes.Home}>
                <div className= {classes.ImageGalary}>
                    <ImageGalary imageArray={ImageArray} />
                </div>
                <div className={classes.HomeLayout}>
                    <RecentPost width='98%'/>
                    <Sidebar width='100%'/>
                </div>


                
            </div>
        )
    }
}

export default Home;
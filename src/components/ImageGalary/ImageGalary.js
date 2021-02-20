import React from 'react';
import Card from '../UI/Card/Card';
import classes from './ImageGalary.module.css';

const imageGalary = props => {
    const galaryHieght=540;
    const galaryStyle={
        height: galaryHieght+'px',
        overflow:'hidden'
        }
    const sideImageHieght= galaryHieght/3;
    const imgArray= props.imageArray;


    return(
        <Card>
            <div className={classes.ImageGalary} style={galaryStyle}>
                <section style={{width:'70%'}} className={classes.MainImage}>
                    <div >
                        <img src={require('../../assets/blogPostImages/'+ imgArray[2]).default} alt='Indian Team'></img>
                    </div>
                </section>
               
                <section style={{width:'30%'}} className={classes.SideImagesWrapper}>
                    {imgArray.map(img=>{
                        return(
                            <div style={{height:`${sideImageHieght}px`}}>
                                <img src={require('../../assets/blogPostImages/' + img).default} alt='Indian Team'></img>
                            </div>
                        )
                    })}
                </section>
            </div>
        </Card>
    )
};

export default imageGalary;
import React from 'react';

const Blog = (props) => {
    return ( <div className="blog">
        <div className="blog-upper">
        <img src={props.blogImg} alt="blog"/>
        </div>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <h3>{props.desc}</h3>
        <hr></hr>
        <p>Read More</p>
    </div> );
}
 
export default Blog;
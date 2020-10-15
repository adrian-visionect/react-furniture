import React from 'react';

const Blog = (props) => {
  return (
    <div className="blog">
      <div className="blog-upper">
        <img src={props.blogImg} alt="blog" />
      </div>
      <div className="blog-lower">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <h3>{props.desc}</h3>
        <h4>Read More</h4>
        <hr></hr>
      </div>
    </div>
  );
};

export default Blog;

import React from 'react';
import Blog from './Blog';
import './OurBlogs.scss';
import blog1 from './../../images/blog1.png';
import blog2 from './../../images/blog2.png';
import blog3 from './../../images/blog3.png';
const OurBlogs = () => {
  return (
    <div className="our-blogs">
      <div className="blank"></div>
      <div className="our-blogs-right">
        <div className="our-blogs-container">
          <h1>Our Blogs</h1>
          <p>
            Find a bright ideal to suit your taste with our great selection of
            suspension, wall, floor and table lights
          </p>
          <div className="blogs">
            <Blog blogImg={blog1} />
            <Blog blogImg={blog2} />
            <Blog blogImg={blog3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBlogs;

// Lorem ipsum dolor sit amet, sadipscing elitr, sed

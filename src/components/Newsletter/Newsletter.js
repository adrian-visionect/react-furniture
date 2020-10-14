import React from 'react';
import './Newsletter.scss'
const Newsletter = () => {
    return ( 
        <div className="newsletter">
            <div className="nl-container">
                <h1>
                    Subscribe Our Newsletter
                </h1>
                <p>Enter Your address to join our mailing list and keep yourself update</p>
                <form>
                    <input type="text" placeholder="Enter Your Email"></input>
                    <button>Update Now</button>
                </form>
            </div>
        </div>
     );
}
 
export default Newsletter;
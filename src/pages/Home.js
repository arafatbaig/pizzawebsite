import React from 'react';
import { Link} from "react-router-dom";
import BannerImage from "../assests/pizza.jpeg";
import '../styles/Home.css';
function Home() {
  return (
    <div>
      <div className ="home"  style ={{backgroundImage:`url(${BannerImage})`}}>
        <div 
            className ="headerContainer"
           >
            
          <h1> Firehouse Pizza</h1>
          <p> "You can't make everyone happy. You're not pizza."</p>
          <Link to ="/menu">
          <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
        
      
    </div>
  )
}

export default Home

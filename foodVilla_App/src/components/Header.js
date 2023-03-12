import { useState } from "react"; 
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodVilla.jpg";  

//we don't need to export title as it is being used in the HeaderComponent
const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src= {Logo}
        />
    </a>
    
);

const Header = () => {
    const[isLoggedin, setIsLoggedin] = useState(false);

    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            
            {isLoggedin?<button onClick={() => setIsLoggedin(false)}>Logout</button>
            :<button onClick={() => setIsLoggedin(true)}>LogIn</button>}
        </div>
    )
};

// exporting means that I am exporting this 'title' so that anyone can uses it
// there are two ways of exporting
// 1. export default title -> it means that it will export this Title component by default
// 2. named export 
export default Header;
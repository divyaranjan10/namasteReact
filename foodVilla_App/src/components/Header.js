import { useState } from "react"; 
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodVilla.jpg";  

const Title = () => (
    <a href="/">
        <img
            className="h-28 p-2"
            alt="logo"
            src= {Logo}
        />
    </a>
    
);

const Header = () => {
    const[isLoggedin, setIsLoggedin] = useState(false);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            
            {isLoggedin?<button onClick={() => setIsLoggedin(false)}>Logout</button>
            :<button onClick={() => setIsLoggedin(true)}>LogIn</button>}
        </div>
    )
};

export default Header;
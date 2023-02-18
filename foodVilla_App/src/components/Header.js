import { useState } from "react";   

//we don't need to export title as it is being used in the HeaderComponent
const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://content.jdmagicbox.com/comp/rayagada/r1/9999p6856.6856.220317231853.s9r1/catalogue/the-food-villa-family-restaurant-gunupur-gunupur-rayagada-restaurants-zu4jzj8a1p.jpg"
        />
    </a>
    
);

const HeaderComponent = () => {
    const[isLoggedin, setIsLoggedin] = useState(false);

    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
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
export default HeaderComponent;
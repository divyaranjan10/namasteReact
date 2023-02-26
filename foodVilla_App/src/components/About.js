import { Outlet } from "react-router-dom";

const About = () => {
    return(
        <div>
            <h1>Welcome to About Us Page</h1>
            <p>This is the Chapter 7 of Namaste React Course.</p>
            <Outlet/>
        </div>
    )
}

export default About;
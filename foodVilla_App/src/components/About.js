import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent - Constructor ");
    }

    componentDidMount(){
        
    }

    render(){
        console.log("Parent - render");
        return(
            <div>
                <h1>Welcome to About Us Page</h1>
                <p>This is the Chapter 7 of Namaste React Course.</p>
                <ProfileClass name={"DP"}/>
            </div>
        )
    }
}

export default About;
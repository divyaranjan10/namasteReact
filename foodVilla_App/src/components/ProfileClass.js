import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        //in the class based component, all the state variables are created as a part of one object
        //so basically, whole state is a one big object
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location: "Dummy Location"
            },
        };
        console.log("Child - Constructor " + this.props.name);
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/divyaranjan10");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
        console.log("Child - componentDidMount " + this.props.name);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render(){
        // const{} = this.state;
        console.log("Child - render " + this.props.name);
        return(
            <div>
                <h1>This is Profile Class Component.</h1>
                <h2>LoginID: {this.state.userInfo.login}</h2>
                <h3>Name: {this?.state?.userInfo?.name}</h3>
                <img src={this?.state?.userInfo?.avatar_url}/>
            </div>
        )
    }
}

export default ProfileClass;
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
    const {user, setUser} = useContext(UserContext);

    return(
        <h4 className="p-10  bg-pink-50 shadow-lg ">This Project is developed by <b>{user.name}</b> - <b>{user.email}</b></h4>
    );
};

export default Footer;
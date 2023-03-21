import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Dummy Name",
        email: "dummy@gmail.com"
}});

//suppose there are 10 context that you are using, so you can give it a default name for debugging purposes.
UserContext.displayName = "UserContext";

export default UserContext;
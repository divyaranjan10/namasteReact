import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title1",
    key:"h1"
},"Heading 1");

const heading2 = React.createElement("h2",{
    id:"title2",
    key:"h2"
},"Heading 2");

//React.createElment => Object => HTML Code(DOM)

const container = React.createElement("div",{
    id:"container",
    hello:"world"
}, [heading1, heading2])

//JSX -> JSX is a HTML like syntax inside Javascript
//Advantages of JSX -> Readability, Less Code
//Babel is a JS compiler/package that converts jsx to html

//Components in React
//1. Functional Component -> It's basically a JS function that return some piece of JSX or a react element
//2. Class based component
//** Name of component starts with capital letter. */


const line = (
    <h1 id="line1" key="jsxLine">Hello! it's JSX</h1>
);
    
const HeaderComponent = () => {
    return (
        <div>
            {Try()}
            <h1>Hello! It's a functional component, Heading 1.</h1>
            <h2>Hello! It's a functional component, heading 2.</h2>
        </div>
    )
};

const Try = () => (
    <h1 id="line1" key="jsxLine">Using functional component inside another component.</h1>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<HeaderComponent/>);

// *    power of parcel
// *    - HMR : Hot Module Reloading (basically parcel will take care of all the files in your directories)
// *    - How does HMR works? -> File watcher algorithm (C++)
// *    - Bundling
// *    - Minify
// *    - Cleaning our code
// *    - Dev and Production Build
// *    - Super fast build algorithm
// *    - Image Optimization
// *    - Caching while development
// *    - Compression
// *    - Compatible with older version of browser (add polyfills)
// *    - HTTPS on dev
// *    - uses port number
// *    - Consistent Hashing
// *    - Tree Shaking (Removing Unwanted Code)
// *    - **Scenario for Tree Shaking** - Suppose our app is importing a library, that containd 10 helper functions and we just need 2-3 
// *    - functions in our project, so 'parcel' will ignore all the unwanted code(functions) not required in our project 
// *    - Zero Config 

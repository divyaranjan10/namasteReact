import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title1",
},"Heading 1");

const heading2 = React.createElement("h2",{
    id:"title2",
},"Heading 2");

const container = React.createElement("div",{
    id:"container",
    hello:"world"
}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(container);


//production ready -> minify the code, optimize, clean console and bundle
//Bundlers --> webpack, vite, parcel --> package ---> to use it, we need --> package manager(npm) --> no it's not called Node Package Manager XD
//why do we need NPM? --> because we need to manage a lot of packages in our code
//what are dependencies? --> so basically dependencies are all the packages that our project needs.
//so, when you install something, node modules gets installed into your project
//so, basically node modules is kind of database for your npm
//node modules are the heaviest object in the universe (jk)
//we do not need to push node modules into our git repositories
//because we have 'package-lock.json' and 'package.json' with us, that sufficient info to create node modules for us
//npx --> execute using npm
//dist folder -> it keeps the files minifies for us
//browserlist package

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

// Transitive Dependencies -> we have our package manager which handles and takes care of our transitive dependencies in our code.


//So, we are changing content and it automatically changing the content
//this thing is called Hot MOdule Reload - this power is given by parcel
//File Watcher Algorithm - C++
//npx parcel index.html(entry point) --> it's just create a develoepment build for us an d host it on our server

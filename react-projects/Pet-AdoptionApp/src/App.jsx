//Adding lib
import React from "react";
import ReactDOM from "react-dom";

const App = ()=>{
    return React.createElement("div",{},
    [
        React.createElement("h1",{},"Adopt me!"),
        React.createElement(Pet),
        React.createElement(Pet)
    ])
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
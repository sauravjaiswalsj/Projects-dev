//add libs
import React from "react";

const Pet = (props)=>{
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    );
};

export default Pet;

//old way

// const Pet = ()=>{
//     return React.createElement("div",{},[
//         React.createElement("h1",{},"Luna"),
//         React.createElement("h2",{},"Tick"),
//         React.createElement("h2",{},"Shero"),
//         React.createElement("h2",{},"Doreamon"),
//         React.createElement("h2",{},"Nobita"),
//     ]);
// };
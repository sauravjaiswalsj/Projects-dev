import { useState } from "react";
import { TextField } from "@mui/material";
const AddTask = () => {
    return (<>
        <div className="container justify-center md:mx-auto py-5 px-5">
            <TextField id="standard-basic" label="Add Task" variant="standard" />
        </div>
    </>)
};

export default AddTask;
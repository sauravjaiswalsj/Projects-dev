import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query"
import addTodo from "./addTodo";

const AddTask = () => {
    const inputRef = useRef("");

    const [task, setTask] = useState('');
    const result = useQuery(["addTask", task], addTodo);
    //const data = result?.data?.task ?? [];

    return (<>
        <div className="md:flex flex justify-center ...">
            <form action="" className="ml-5 mr-5 w-full justify-center max-w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    const todo = inputRef.current.value;
                    console.log(todo)
                    setTask(todo);
                    e.target.reset();
                }}
            >
                <div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="mt-5 mb-5 italics block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-password">
                                Add Task:
                            </label>
                            <input ref={inputRef} className=" rounded-md appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                            <button className="float-right shadow-md flex-shrink-0 bg-indigo-500 shadow-indigo-500/50 hover:bg-indigo-800 border-indigo-500 hover:border-indigo-700 text-sm border-4 w-32 text-white py-1 px-2 rounded" type="submit">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
};

export default AddTask;
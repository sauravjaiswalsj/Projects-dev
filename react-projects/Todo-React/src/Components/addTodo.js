
const addTodo = async ({ queryKey }) => {
    const { task } = queryKey[1];
    console.log(task);
    return null;
};

export default addTodo;
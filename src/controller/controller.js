export const getToDo = (req, res, next) => {
    const {id} = req.params;

    res.json(ToDo);
}

export const getToDoList = (req, res, next) => {
    res.json(ToDoList)
}

export const postToDo = (req, res, next) => {
    const {ToDo} = req.body

    res.status(200).json({success:true})
}

import{ Todo } from '../models/todo.js';

class todoController{
    constructor(){
        this.TODOS = [];
    }

    createTodo(req, res) {
        const { task } = req.body;
        const newTodo = new Todo(Math.random().toString(), task);
        this.TODOS.push(newTodo);
        res.json({  
            message: 'Todo created successfully',
            newTask: newTodo
        });
    } 
    getTodos(req, res) {
        res.json({ tasks: this.TODOS});
    }
}

export const TodoController = new todoController();
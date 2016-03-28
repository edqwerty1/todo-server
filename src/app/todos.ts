import todo = require('./todo');
import url = require('./url');

export interface IToDos {
    Todos: todo.IToDo[],
    Urls: url.IUrl[]
}


export class ToDos implements IToDos {
    constructor(public Todos:todo.IToDo[], public Urls: url.IUrl[]) {
        
    }
}

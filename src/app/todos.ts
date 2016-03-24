import todo = require('./todo');
import url = require('./url');

export interface IToDos {
    ToDo: todo.IToDo[],
    Urls: url.IUrl[]
}


export class ToDos implements IToDos {
    constructor(public ToDo:todo.IToDo[], public Urls: url.IUrl[]) {
        
    }
}

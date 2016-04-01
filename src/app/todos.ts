import {IToDo} from './todo';
import {IUrl} from './url';

export interface IToDos {
    todos: IToDo[];
    urls: IUrl[];
}


export class ToDos implements IToDos {
    constructor(public todos:IToDo[], public urls: IUrl[]) {
    }
}

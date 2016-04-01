import {IUrl} from './url';

export interface IToDo {
    id: number;
    message: string;
    createdDateTime: Date;
    urls:  IUrl[];
}


export class ToDo implements IToDo {
    constructor(public id: number, public message: string, public createdDateTime: Date, public urls: IUrl[]) {

    }
}

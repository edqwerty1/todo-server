import url = require('./url');

export interface IToDo {
    Id: number;
    Message: string;
    CreatedDateTime: Date;
    Urls:  url.IUrl[]
}


export class ToDo implements IToDo {
    constructor(public Id: number, public Message: string, public CreatedDateTime: Date, public Urls: url.IUrl[]) {

    }
}

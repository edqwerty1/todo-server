export interface IToDo {
    Id: number;
    Message: string;
    CreatedDateTime: Date;
}


export class ToDo implements IToDo {
    constructor(public Id: number, public Message: string, public CreatedDateTime: Date) {

    }
}

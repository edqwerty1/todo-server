
export class App {
    constructor(private message: string = 'Hello World!') {
    }

    getMessage() {
        return this.message;
    }
}
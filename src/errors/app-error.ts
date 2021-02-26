export class AppError {
    constructor(public readonly message: string, public readonly statusCode: number = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
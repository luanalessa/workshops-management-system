import { User } from 'src/domain/models/user.model';

// src/application/common/response-handler.ts
export class ResponseHandler<T> {
    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly data?: T,
        public readonly error?: any,
    ) {}

    static success(message: string = 'Operation successful', data?: Partial<User>, statusCode: number = 200): ResponseHandler<Partial<User>> {
        return new ResponseHandler(statusCode, message, data);
    }

    static error(message: string, statusCode: number = 400, error?: any): ResponseHandler<null> {
        return new ResponseHandler(statusCode, message, null, error);
    }
}

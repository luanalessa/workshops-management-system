import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { StudentServices } from '../../domain/services/student.services';
import { ResponseHandler } from '../utils/response-handler';

@Injectable()
export class StudentUseCase {
    constructor(private readonly studentService: StudentServices) {}

    async create(student: CreateUserDto): Promise<any> {
        try {
            const studentAlreadyExists = await this.studentService.get(student.documentNumber);
            if (studentAlreadyExists)
                return ResponseHandler.error(`Student with document number: ${student.documentNumber} already exists`, HttpStatus.BAD_REQUEST);

            const data = this.studentService.create(student);
            return ResponseHandler.success(data, 'Student created successfully!');
        } catch (err) {
            return ResponseHandler.error(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async get(documentNumber: string): Promise<any> {
        try {
            const student = this.studentService.get(documentNumber);
            return ResponseHandler.success(student, 'Student with document number found!');
        } catch (err) {
            return ResponseHandler.error('Student does not exist.', HttpStatus.NOT_FOUND);
        }
    }
}

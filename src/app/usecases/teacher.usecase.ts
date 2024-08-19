import {HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { TeacherServices } from '../../domain/services/teacher.services';
import { ResponseHandler } from '../utils/response-handler';

@Injectable()
export class TeacherUseCase {
    constructor(private readonly teacherService: TeacherServices) {}

    async create(teacher: CreateUserDto): Promise<any> {
        try {
            const teacherAlreadyExist = await this.teacherService.get(teacher.documentNumber);
            if (teacherAlreadyExist)
                return ResponseHandler.error(` Teacher with document number: ${teacher.documentNumber} already exists.`, HttpStatus.BAD_REQUEST);

            const data = this.teacherService.create(teacher);
            return ResponseHandler.success(data, 'Teacher created successfully!');
        } catch (err) {
            return ResponseHandler.error(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async get(documentNumber: string): Promise<any> {
        try {
            const teacher = this.teacherService.get(documentNumber);
            return ResponseHandler.success(teacher, 'Teacher with document number found!');
        } catch (err) {
            return ResponseHandler.error('Teacher does not exist.', HttpStatus.NOT_FOUND);
        }
    }
}

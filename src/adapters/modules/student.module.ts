import { Module } from '@nestjs/common';
import { StudentController } from '../controllers/student.controller';
import { StudentServices } from '../../domain/services/student.services';
import { StudentUseCase } from '../../app/usecases/student.usecase';

@Module({
    imports: [],
    controllers: [StudentController],
    providers: [StudentUseCase, StudentServices],
})
export class StudentModule {}

import { Module } from '@nestjs/common';
import { TeacherController } from '../controllers/teacher.controller';
import { TeacherServices } from '../../domain/services/teacher.services';
import { TeacherUseCase } from '../../app/usecases/teacher.usecase';

@Module({
    imports: [],
    controllers: [TeacherController],
    providers: [TeacherUseCase, TeacherServices],
})
export class TeacherModule {}

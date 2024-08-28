import { Module } from '@nestjs/common';
import { CourseController } from '../controllers/course.controller';
import { CourseUseCase } from 'src/app/usecases/course.use.case';
import { CourseServices } from 'src/domain/services/course.services';
import { TeacherServices } from 'src/domain/services/teacher.services';
import { StudentServices } from 'src/domain/services/student.services';

@Module({
    imports: [],
    controllers: [CourseController],
    providers: [CourseUseCase, CourseServices, TeacherServices, StudentServices],
})
export class CourseModule {}

import { Module } from '@nestjs/common';
import { StudentModule } from './adapters/modules/student.module';
import { TeacherModule } from './adapters/modules/teacher.module';
import { CourseModule } from './adapters/modules/course.module';

@Module({
    imports: [StudentModule, TeacherModule, CourseModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

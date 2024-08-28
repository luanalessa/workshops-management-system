import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseHandler } from '../utils/response-handler';
import { CourseServices } from '../../domain/services/course.services';
import { CreateCourseDto } from '../dto/create-course.dto';
import { TeacherServices } from 'src/domain/services/teacher.services';
import { StudentServices } from 'src/domain/services/student.services';

@Injectable()
export class CourseUseCase {
    constructor(
        private readonly courseService: CourseServices,
        private readonly teacherService: TeacherServices,
        private readonly studentService: StudentServices,
    ) {}

    async create(course: CreateCourseDto): Promise<any> {
        try {
            const teacherAlreadyExists = await this.teacherService.get('email', course.teacherEmail);
            const courseAlreadyExists = await this.courseService.get('title', course.title);

            console.log(teacherAlreadyExists);
            console.log(courseAlreadyExists);
            if (teacherAlreadyExists && !courseAlreadyExists) {
                const response = this.courseService.create(course);
                return ResponseHandler.success('Course created successfully!', response);
            }
            return ResponseHandler.error(`Course already exists or teacher is not register`, HttpStatus.BAD_REQUEST);
        } catch (err) {
            return ResponseHandler.error(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async get(title: string): Promise<any> {
        try {
            const course = this.courseService.get('title', title);
            return ResponseHandler.success('Course found!', course);
        } catch (err) {
            return ResponseHandler.error('Course does not exist.', HttpStatus.NOT_FOUND);
        }
    }

    async subscribe(courseTitle: string, studentEmail: string): Promise<any> {
        try {
            console.log(courseTitle);

            const courseId = this.courseService.subscribe(courseTitle, studentEmail);
            console.log(courseId);

            if (courseId) {
                const studentResponse = this.studentService.subscribe(courseId, studentEmail);
                if (studentResponse) {
                    return ResponseHandler.success('Course found!');
                }
            }
        } catch (err) {
            return ResponseHandler.error('Course or student does not exist.', HttpStatus.NOT_FOUND);
        }
    }
}

import { Course } from '../models/course.model';
import { CreateCourseDto } from '../../app/dto/create-course.dto';
import { CoursesRepository } from 'src/repository/courses.repository';

export class CourseServices {
    public create(subject: CreateCourseDto): Course {
        const course = new Course(
            subject.title,
            subject.description,
            subject.address,
            subject.teacherEmail,
            subject.dateTime,
            subject.duration,
            subject.vacancies,
        );

        const courses = CoursesRepository.read();
        courses.push(course);

        CoursesRepository.write(courses);
        return course;
    }

    public get(key: string, value: string): Course {
        const courses = CoursesRepository.read();
        const index = courses.findIndex((course: Course) => course[key] === value);

        if (index != -1) return courses[index];

        return;
    }

    public subscribe(courseTitle: string, subscriber: string): string {
        const course = this.get('title', courseTitle);

        if (course.students.length < course.vacancies) {
            course.students.push(subscriber);
            const courses = CoursesRepository.read();
            const index = courses.findIndex((course: Course) => course.title === courseTitle);
            courses[index] = course;

            CoursesRepository.write(courses);
            return course.id;
        }
        return;
    }
}

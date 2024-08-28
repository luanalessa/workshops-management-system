import { CreateUserDto } from 'src/app/dto/create-user.dto';
import { UserServices } from './user.services';
import { Student } from '../models/student.model';
import { StudentsRepository } from '../../repository/students.repository';

export class StudentServices extends UserServices {
    public create(user: CreateUserDto): Student {
        const student = new Student(user.name, user.documentNumber, user.address, user.phone, user.dateOfBirth, user.email, user.password);

        const students = StudentsRepository.read();
        students.push(student);

        StudentsRepository.write(students);
        return student;
    }

    public get(key: string, value: string): Student {
        const students = StudentsRepository.read();
        const index = students.findIndex((student: Student) => student[key] === value);

        if (index != -1) return students[index];

        return;
    }

    public subscribe(courseId: string, studentEmail: string): string {
        const student = this.get('email', studentEmail);

        if (student) {
            student.courses.push(courseId);
            const students = StudentsRepository.read();
            const index = students.findIndex((student: Student) => student.email === studentEmail);
            students[index] = student;

            StudentsRepository.write(students);
            return student.id;
        }

        return;
    }
}

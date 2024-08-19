import { CreateUserDto } from 'src/app/dto/create-user.dto';
import { UserServices } from './user.services';
import { Student } from '../models/student.model';
import { StudentRepository } from '../../repository/studant.repository';

export class StudentServices extends UserServices {
    public create(user: CreateUserDto): Student {
        const student = new Student(user.name, user.documentNumber, user.address, user.phone, user.dateOfBirth, user.email, user.password);

        const students = StudentRepository.read();
        students.push(student);

        StudentRepository.write(students);
        return student;
    }

    public get(documentNumber: string): Student {
        const students = StudentRepository.read();
        const index = students.findIndex((student: Student) => student.documentNumber === documentNumber);

        if (index != -1) return students[index];

        return;
    }
}

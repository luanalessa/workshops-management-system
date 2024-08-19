import { CreateUserDto } from 'src/app/dto/create-user.dto';
import { Teacher } from '../models/teacher.model';
import { UserServices } from './user.services';
import { Student } from '../models/student.model';
import { TeacherRepository } from '../../repository/teacher.repository';
import { EMPTY } from 'rxjs';

export class TeacherServices extends UserServices {
    public create(user: CreateUserDto): Teacher {
        const teacher = new Teacher(
            user.name,

            user.documentNumber,
            user.address,
            user.phone,
            user.dateOfBirth,
            user.email,
            user.password,
        );

        const teachers = TeacherRepository.read();
        teachers.push(teacher);

        TeacherRepository.write(teachers);

        return teacher;
    }

    public get(documentNumber: string): Student {
        const teachers = TeacherRepository.read();
        const index = teachers.findIndex((teacher: Teacher) => teacher.documentNumber === documentNumber);

        if (index != -1) return teachers[index];

        return;
    }
}

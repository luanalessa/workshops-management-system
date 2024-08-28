import { CreateUserDto } from 'src/app/dto/create-user.dto';
import { Teacher } from '../models/teacher.model';
import { UserServices } from './user.services';
import { Student } from '../models/student.model';
import { TeachersRepository } from '../../repository/teachers.repository';
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

        const teachers = TeachersRepository.read();
        teachers.push(teacher);

        TeachersRepository.write(teachers);

        return teacher;
    }

    public get(key: string, value: string): Student {
        const teachers = TeachersRepository.read();
        const index = teachers.findIndex((teacher: Teacher) => teacher[key] === value);

        if (index != -1) return teachers[index];

        return;
    }
}

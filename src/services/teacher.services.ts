import { CreateUserDto } from "src/dto/create-user.dto";
import { Teacher } from "../models/teacher.model";
import { UserServices } from './user.services';
import { Student } from "../models/student.model";

export class TeacherService extends UserServices{
    public create(user: CreateUserDto) : Teacher{
        const teacher = new Teacher(
            user.name,
            user.documentNumber,
            user.address,
            user.phone,
            user.dateOfBirth,
            user.email,
            user.password
        )

        return teacher;
    }
    // public get(id: string) : Student {
    // }
}
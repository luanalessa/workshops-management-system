import { CreateUserDto } from "src/dto/create-user.dto";
import { User } from "../models/user.model";
import { UserServices } from './user.services';
import { Student } from "../models/student.model";

export class StudentService extends UserServices{
    public create(user: CreateUserDto) : Student{
        const student = new Student(
            user.name,
            user.documentNumber,
            user.address,
            user.phone,
            user.dateOfBirth,
            user.email,
            user.password
        )

        return student;
    }
    // public get(id: string) : Student {
    // }
}
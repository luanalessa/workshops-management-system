import { User } from "src/models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";

export abstract class UserServices {
    public abstract create(createUser: CreateUserDto) : User ;
    // public abstract get(id: string) : User ;
}

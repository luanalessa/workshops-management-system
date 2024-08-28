import { User } from 'src/domain/models/user.model';
import { CreateUserDto } from '../../app/dto/create-user.dto';

export abstract class UserServices {
    /**
     * Creates a new user
     * @param createUser - DTO containing account creation data.
     * @returns Created user.
     */
    public abstract create(createUser: CreateUserDto): User;

    /**
     * Get the user by any key
     * @param key - The key, can be an email, document number or anything in user domain
     * @param value - The value releated from the key
     * @returns The requested user.
     */
    public abstract get(key: string, value: string): User;
}

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
     * Get the user by its document number
     * @param documentNumber
     * @returns The requested user.
     */
    public abstract get(documentNumber: string): User;
}

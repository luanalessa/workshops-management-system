import { UserType } from 'src/domain/enum/user-type';
import { User } from './user.model';
import { Address } from './valueObjects/address';

export class Teacher extends User {
    public courses: string[] = [];
    constructor(name: string, nationalId: string, address: Address, phone: string, dateOfBirth: Date, email: string, password: string) {
        super(name, nationalId, address, phone, dateOfBirth, email, password);
        this.userType = UserType.TEACHER;
    }
}

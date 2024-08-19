import { randomUUID } from 'crypto';
import { Address } from './valueObjects/address';
import { UserType } from 'src/domain/enum/user-type';

export class User {
    id: string;
    name: string;
    documentNumber: string;
    address: Address;
    phone: string;
    dateOfBirth: Date;
    email: string;
    password: string;
    userType: UserType;
    isActive: boolean;

    constructor(name: string, documentNumber: string, address: Address, phone: string, dateOfBirth: Date, email: string, password: string) {
        this.id = randomUUID().toString();
        this.documentNumber = documentNumber;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.password = password;
        this.isActive = true;
    }
}

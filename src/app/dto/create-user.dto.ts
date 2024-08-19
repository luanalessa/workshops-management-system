import { Address } from '../../domain/models/valueObjects/address';

export class CreateUserDto {
    name: string;

    documentNumber: string;

    address: Address;

    phone: string;

    dateOfBirth: Date;

    email: string;

    password: string;
}

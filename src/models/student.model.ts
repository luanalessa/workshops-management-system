import { UserType } from "src/enum/user-type";
import { User } from "./user.model";
import { Address } from "./valueObjects/address";

export class Student extends User{
    public courses : string[] = [];
    constructor(name: string, documentNumber: string, address: Address, phone: string, dateOfBirth: Date, email: string, password: string) {
        super(name, documentNumber, address, phone, dateOfBirth, email, password);
        this.userType = UserType.STUDENT;
    }
}
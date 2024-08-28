import { randomUUID } from 'crypto';
import { Address } from './valueObjects/address';

export class Course {
    public id: string;
    public title: string;
    public description: string;
    public address: Address;
    public teacher: string;
    public dateTime: Date;
    public duration: number;
    public vacancies: number;
    public students: string[] = [];

    constructor(title: string, description: string, address: Address, teacher: string, dateTime: Date, duration: number, vacancies: number) {
        this.id = randomUUID().toString();
        this.title = title;
        this.description = description;
        this.address = address;
        this.teacher = teacher;
        this.dateTime = dateTime;
        this.duration = duration;
        this.vacancies = vacancies;
    }
}

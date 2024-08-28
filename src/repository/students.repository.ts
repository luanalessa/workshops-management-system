import * as fs from 'fs';
import * as path from 'path';
import { Student } from '../domain/models/student.model';

export class StudentsRepository {
    protected static filePath = path.join(__dirname, '..', 'repository', 'data', 'students.json');

    protected static ensureFileExists(): void {
        if (!fs.existsSync(this.filePath)) {
            fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
            fs.writeFileSync(this.filePath, '[]', 'utf8');
        }
    }

    static read(): Student[] {
        this.ensureFileExists();
        const data = fs.readFileSync(this.filePath, 'utf8');
        const studant: Student[] = JSON.parse(data);

        return studant;
    }

    static write(studant: Student[]): void {
        this.ensureFileExists();
        fs.writeFileSync(this.filePath, JSON.stringify(studant, null, 2), 'utf8');
    }
}

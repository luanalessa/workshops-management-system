import * as fs from 'fs';
import * as path from 'path';
import { Teacher } from '../domain/models/teacher.model';

export class TeachersRepository {
    protected static filePath = path.join(__dirname, '..', 'repository', 'data', 'teachers.json');

    protected static ensureFileExists(): void {
        if (!fs.existsSync(this.filePath)) {
            fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
            fs.writeFileSync(this.filePath, '[]', 'utf8');
        }
    }

    static read(): Teacher[] {
        this.ensureFileExists();
        const data = fs.readFileSync(this.filePath, 'utf8');
        const teacher: Teacher[] = JSON.parse(data);

        return teacher;
    }

    static write(teacher: Teacher[]): void {
        this.ensureFileExists();
        fs.writeFileSync(this.filePath, JSON.stringify(teacher, null, 2), 'utf8');
    }
}

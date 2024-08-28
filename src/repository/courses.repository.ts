import * as fs from 'fs';
import * as path from 'path';
import { Course } from '../domain/models/course.model';

export class CoursesRepository {
    protected static filePath = path.join(__dirname, '..', 'repository', 'data', 'courses.json');

    protected static ensureFileExists(): void {
        if (!fs.existsSync(this.filePath)) {
            fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
            fs.writeFileSync(this.filePath, '[]', 'utf8');
        }
    }

    static read(): Course[] {
        this.ensureFileExists();
        const data = fs.readFileSync(this.filePath, 'utf8');
        const course: Course[] = JSON.parse(data);

        return course;
    }

    static write(course: Course[]): void {
        this.ensureFileExists();
        fs.writeFileSync(this.filePath, JSON.stringify(course, null, 2), 'utf8');
    }
}

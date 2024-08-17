import * as fs from 'fs';
import * as path from 'path';
import { User } from 'src/models/user.model';

export class UserRepository {
    protected static filePath = path.join(__dirname, '..', 'repository', 'data', 'user.json');

    protected static ensureFileExists(): void {
        if (!fs.existsSync(this.filePath)) {
            fs.mkdirSync(path.dirname(this.filePath), { recursive: true })
            fs.writeFileSync(this.filePath, '[]', 'utf8')
        }
    }

    static read(): User[] { 
        this.ensureFileExists();
        const data = fs.readFileSync(this.filePath, 'utf8');
        const users: User[] = JSON.parse(data);
        
        return users;
    }

    static write(user: User[]): void {
        this.ensureFileExists();
        fs.writeFileSync(this.filePath, JSON.stringify(user, null, 2), 'utf8');
    }
}
import { CreateUserDto } from 'src/app/dto/create-user.dto';
import { StudentService } from '../../src/domain/services/student.services';
import { Address } from 'src/domain/models/valueObjects/address';

describe('Student', () => {
    let service: StudentService;

    it('should create a new student', () => {
        const student: CreateUserDto = {
            name: 'João Silva',
            documentNumber: '465465',
            address: new Address('Rua Principal', '123', 'Cidade Exemplo', 'Estado Exemplo', '12345-678', 'Brasil'),
            phone: '555-5555',
            dateOfBirth: new Date('1990-01-01'),
            email: 'joao.silva@exemplo.com',
            password: 'senha123',
        };
    });
});

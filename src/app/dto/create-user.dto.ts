import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../domain/models/valueObjects/address';

export class CreateUserDto {
    @ApiProperty({ example: 'João Silva' })
    name: string;

    @ApiProperty({ example: '123.456.789-00' })
    documentNumber: string;

    @ApiProperty({ type: Address, example: { street: 'Rua das Flores', number: '123', city: 'São Paulo', state: 'SP', zipCode: '01000-000' } })
    address: Address;

    @ApiProperty({ example: '(11) 91234-5678' })
    phone: string;

    @ApiProperty({ example: '1990-05-20' })
    dateOfBirth: Date;

    @ApiProperty({ example: 'joao.silva@example.com' })
    email: string;

    @ApiProperty({ example: 'StrongPassword@123' })
    password: string;
}

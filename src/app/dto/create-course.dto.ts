import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../domain/models/valueObjects/address';

export class CreateCourseDto {
    @ApiProperty({ example: 'Curso de Fotografia' })
    name: string;

    @ApiProperty({ example: 'Fotografia para Iniciantes' })
    title: string;

    @ApiProperty({ example: 'Curso introdutório sobre técnicas de fotografia, incluindo prática ao ar livre.' })
    description: string;

    @ApiProperty({ type: Address, example: { street: 'Rua da Arte', number: '150', city: 'São Paulo', state: 'SP', zipCode: '01234-567' } })
    address: Address;

    @ApiProperty({ example: 'ana.silva@example.com' })
    teacherEmail: string;

    @ApiProperty({ example: '2024-09-15T09:00:00' })
    dateTime: Date;

    @ApiProperty({ example: 4 })
    duration: number;

    @ApiProperty({ example: 20 })
    vacancies: number;
}

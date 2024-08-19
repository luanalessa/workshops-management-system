import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { StudentUseCase } from '../../app/usecases/student.usecase';

@Controller('student')
export class StudentController {
    constructor(private readonly usecase: StudentUseCase) {}

    @Post('/create')
    create(@Body() user: CreateUserDto) {
        return this.usecase.create(user);
    }

    @Get('/search')
    get(@Body() documentNumber: string) {
        return this.usecase.get(documentNumber);
    }
}

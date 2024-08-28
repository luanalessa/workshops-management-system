import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { StudentUseCase } from '../../app/usecases/student.usecase';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Student')
@Controller('student')
export class StudentController {
    constructor(private readonly usecase: StudentUseCase) {}

    @Post('create')
    create(@Body() user: CreateUserDto) {
        return this.usecase.create(user);
    }

    @Get('search')
    get(@Query('id') documentNumber: string) {
        return this.usecase.get(documentNumber);
    }
}

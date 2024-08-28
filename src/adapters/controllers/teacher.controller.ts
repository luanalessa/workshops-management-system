import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { TeacherUseCase } from '../../app/usecases/teacher.usecase';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Teacher')
@Controller('teacher')
export class TeacherController {
    constructor(private readonly usecase: TeacherUseCase) {}

    @Post('create')
    create(@Body() teacher: CreateUserDto) {
        return this.usecase.create(teacher);
    }

    @Get('search')
    get(@Query('id') documentNumber: string) {
        return this.usecase.get(documentNumber);
    }
}

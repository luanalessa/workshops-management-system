import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from '../services/student.services';
import { CreateUserDto } from '../dto/create-user.dto';
import { Student } from '../models/student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly services: StudentService) {}

  @Post('/create')
  create(@Body() user: CreateUserDto): Student {
    return this.services.create(user)
  }
}

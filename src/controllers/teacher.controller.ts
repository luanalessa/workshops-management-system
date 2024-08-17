import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.services';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly services: TeacherService) {}

  @Post('/create')
  create(@Body() user: CreateUserDto): Teacher {
    return this.services.create(user)
  }
}

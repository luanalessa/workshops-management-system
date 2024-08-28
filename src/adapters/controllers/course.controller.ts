import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CourseUseCase } from '../../app/usecases/course.use.case';
import { CreateCourseDto } from '../../app/dto/create-course.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Courses')
@Controller('course')
export class CourseController {
    constructor(private readonly usecase: CourseUseCase) {}

    @Post('create')
    create(@Body() course: CreateCourseDto) {
        console.log(course.title);
        return this.usecase.create(course);
    }

    @Post('subscribe')
    subscribe(@Query('courseTitle') courseTitle: string, @Query('studentEmail') studentEmail: string) {
        return this.usecase.subscribe(courseTitle, studentEmail);
    }

    @Get('search')
    get(@Query('id') id: string) {
        return this.usecase.get(id);
    }
}

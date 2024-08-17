import { Module } from '@nestjs/common';
import { TeacherController } from '../controllers/teacher.controller';
import { TeacherService } from 'src/services/teacher.services';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './adapters/modules/student.module';
import { TeacherModule } from './adapters/modules/teacher.module';

@Module({
    imports: [StudentModule, TeacherModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

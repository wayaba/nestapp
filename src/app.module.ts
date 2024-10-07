import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, PaymentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

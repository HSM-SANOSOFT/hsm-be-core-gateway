import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ComsModule } from './coms/coms.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AuthModule, UsersModule, ComsModule, CommonModule]
})
export class CoreModule {}

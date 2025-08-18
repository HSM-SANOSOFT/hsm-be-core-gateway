import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { CommonController } from './controllers/common.controller';
import { ComsController } from './controllers/coms.controller';
import { DocsController } from './controllers/docs.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [
    AuthController,
    CommonController,
    ComsController,
    DocsController,
    UsersController,
  ],
})
export class CoreModule {}

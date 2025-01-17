import { Module } from '@nestjs/common';
import { ComunesService } from './comunes.service';
import { ComunesController } from './comunes.controller';
import { DatabaseService } from './database/database.service';
@Module({
  controllers: [ComunesController],
  providers: [ComunesService, DatabaseService],
  exports: [ComunesService, DatabaseService] 
})
export class ComunesModule {}


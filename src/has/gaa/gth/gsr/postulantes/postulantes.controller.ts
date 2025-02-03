import { Controller, Get } from '@nestjs/common';

@Controller('postulantes')
export class PostulantesController {

    @Get()
    findAll(): string {
        return 'This action returns all postulantes';
    }
}

import { Controller, Get } from '@nestjs/common';

@Controller()
export class PostulantesController {

    @Get()
    init(): string {
        return 'postulantes';
    }
}

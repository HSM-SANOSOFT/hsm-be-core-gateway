import { Controller, Get } from '@nestjs/common';

@Controller()
export class TrabajosController {
    @Get()
    init(): string {
        return 'trabajos';
    }
}

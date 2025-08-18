import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {
  @Get()
  getTest() {
    return 'Test successful';
  }
}

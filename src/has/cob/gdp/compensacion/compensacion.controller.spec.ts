import { Test, TestingModule } from '@nestjs/testing';
import { CompensacionController } from './compensacion.controller';

describe('CompensacionController', () => {
  let controller: CompensacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompensacionController],
    }).compile();

    controller = module.get<CompensacionController>(CompensacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ComunesController } from './comunes.controller';

describe('ComunesController', () => {
  let controller: ComunesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComunesController],
    }).compile();

    controller = module.get<ComunesController>(ComunesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

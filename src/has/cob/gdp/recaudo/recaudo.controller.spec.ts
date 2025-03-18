import { Test, TestingModule } from '@nestjs/testing';
import { RecaudoController } from './recaudo.controller';

describe('RecaudoController', () => {
  let controller: RecaudoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecaudoController],
    }).compile();

    controller = module.get<RecaudoController>(RecaudoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

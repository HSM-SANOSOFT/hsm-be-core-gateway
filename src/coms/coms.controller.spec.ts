import { Test, TestingModule } from '@nestjs/testing';
import { ComsController } from './coms.controller';

describe('ComsController', () => {
  let controller: ComsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComsController],
    }).compile();

    controller = module.get<ComsController>(ComsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

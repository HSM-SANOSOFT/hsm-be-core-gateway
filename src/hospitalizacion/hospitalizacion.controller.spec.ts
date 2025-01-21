import { Test, TestingModule } from '@nestjs/testing';
import { HospitalizacionController } from './hospitalizacion.controller';

describe('HospitalizacionController', () => {
  let controller: HospitalizacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalizacionController],
    }).compile();

    controller = module.get<HospitalizacionController>(HospitalizacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

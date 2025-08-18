import { Global, Module } from '@nestjs/common';
import { CoreProvider } from 'src/providers/core.provider';
import { HasProvider } from 'src/providers/has.provider';
import { HisProvider } from 'src/providers/his.provider';

@Global()
@Module({
  imports: [CoreProvider, HasProvider, HisProvider],
  exports: [CoreProvider, HasProvider, HisProvider],
})
export class ProvidersModule {}

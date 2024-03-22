import { Module } from '@nestjs/common';
import { ExtrinsicModule } from '../extrinsic/extrinsic.module';
import { ChainService } from './chain.service';
import { ChainController } from './chain.controller';

@Module({
  controllers: [ChainController],
  imports: [ExtrinsicModule],
  providers: [ChainService],
})
export class ChainModule {}

import { Module } from '@nestjs/common';
import { ExtrinsicService } from './extrinsic.service';
import { ExtrinsicController } from './extrinsic.controller';

@Module({
  controllers: [ExtrinsicController],
  providers: [ExtrinsicService],
  exports: [ExtrinsicService]
})
export class ExtrinsicModule {}

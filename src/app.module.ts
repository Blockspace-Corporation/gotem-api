import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AssetsModule } from './modules/assets/assets.module';
import { SmartContractCaseModule } from './modules/smart-contract-case/smart-contract-case.module';
import { SmartContractEvidenceModule } from './modules/smart-contract-evidence/smart-contract-evidence.module';
import { SmartContractVoteModule } from './modules/smart-contract-vote/smart-contract-vote.module';
import { ExtrinsicModule } from './modules/extrinsic/extrinsic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AssetsModule,
    SmartContractCaseModule,
    SmartContractEvidenceModule,
    SmartContractVoteModule,
    ExtrinsicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

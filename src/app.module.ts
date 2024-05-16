import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import smtp from './config/smtp';
import typeorm from './config/typeorm';

import { AssetsModule } from './modules/assets/assets.module';
import { SmartContractCaseModule } from './modules/smart-contract-case/smart-contract-case.module';
import { SmartContractEvidenceModule } from './modules/smart-contract-evidence/smart-contract-evidence.module';
import { SmartContractVoteModule } from './modules/smart-contract-vote/smart-contract-vote.module';
import { ExtrinsicModule } from './modules/extrinsic/extrinsic.module';
import { SmartContractGtxModule } from './modules/smart-contract-gtx/smart-contract-gtx.module';
import { ChainModule } from './modules/chain/chain.module';
import { InvestigatorModule } from './modules/investigator/investigator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [smtp, typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
    AssetsModule,
    SmartContractCaseModule,
    SmartContractEvidenceModule,
    SmartContractVoteModule,
    ExtrinsicModule,
    SmartContractGtxModule,
    ChainModule,
    InvestigatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AssetsModule } from './modules/assets/assets.module';
import { SmartContractCaseModule } from './modules/smart-contract-case/smart-contract-case.module';
import { SmartContractEvidenceModule } from './modules/smart-contract-evidence/smart-contract-evidence.module';
import { SmartContractVoteModule } from './modules/smart-contract-vote/smart-contract-vote.module';
import { ExtrinsicModule } from './modules/extrinsic/extrinsic.module';
import { SmartContractGtxModule } from './modules/smart-contract-gtx/smart-contract-gtx.module';
import { ChainModule } from './modules/chain/chain.module';
import { InvestigatorModule } from './modules/investigator/investigator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Investigator } from './modules/investigator/entities/investigator.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'investigator',
      entities: [Investigator],
      // synchronize: true,
      autoLoadEntities: true
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
  constructor(private dataSource: DataSource) {}
}

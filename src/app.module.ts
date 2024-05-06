import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource} from 'typeorm';

import { AssetsModule } from './modules/assets/assets.module';
import { SmartContractCaseModule } from './modules/smart-contract-case/smart-contract-case.module';
import { SmartContractEvidenceModule } from './modules/smart-contract-evidence/smart-contract-evidence.module';
import { SmartContractVoteModule } from './modules/smart-contract-vote/smart-contract-vote.module';
import { ExtrinsicModule } from './modules/extrinsic/extrinsic.module';
<<<<<<< HEAD
import { SmartContractGtxModule } from './modules/smart-contract-gtx/smart-contract-gtx.module';
import { ChainModule } from './modules/chain/chain.module';
=======
import { InvestigatorModule } from './modules/investigator/investigator.module';
import { Investigator } from './modules/investigator/entities/investigator.entity';
>>>>>>> 48059428f1f000cc3ae108abc078c9d86da0d64d

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
      username: 'root',
      password: 'root',
      database: 'investigator',
      entities: [Investigator],
      synchronize: true,
    }),
    AssetsModule,
    SmartContractCaseModule,
    SmartContractEvidenceModule,
    SmartContractVoteModule,
    ExtrinsicModule,
<<<<<<< HEAD
    SmartContractGtxModule,
    ChainModule,
=======
    InvestigatorModule,
>>>>>>> 48059428f1f000cc3ae108abc078c9d86da0d64d
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

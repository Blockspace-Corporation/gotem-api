import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource} from 'typeorm';

import { AssetsModule } from './modules/assets/assets.module';
import { SmartContractCaseModule } from './modules/smart-contract-case/smart-contract-case.module';
import { SmartContractEvidenceModule } from './modules/smart-contract-evidence/smart-contract-evidence.module';
import { SmartContractVoteModule } from './modules/smart-contract-vote/smart-contract-vote.module';
import { ExtrinsicModule } from './modules/extrinsic/extrinsic.module';
import { SmartContractGtxModule } from './modules/smart-contract-gtx/smart-contract-gtx.module';
import { ChainModule } from './modules/chain/chain.module';
import { InvestigatorModule } from './modules/investigator/investigator.module';
import { Investigator } from './modules/investigator/entities/investigator.entity';
import { config } from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
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

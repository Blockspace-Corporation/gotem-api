import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { SmartContractVoteService } from './smart-contract-vote.service';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';
import { SetVoteDto } from './dto/set-vote.dto';

@Controller('api/smart-contract/vote')
@ApiTags('smart contract - vote')
export class SmartContractVoteController {
  constructor(
    private readonly smartContractVoteService: SmartContractVoteService
  ) { }

  @Get('/get/all-voter')
  getAllVoter(): Promise<VoterEntity[]> {
    return this.smartContractVoteService.getAllVoter();
  }

  @Get('/get/voter/by-id/:id')
  getVoterById(
    @Param('id') id: number
  ): Promise<VoterEntity> {
    return this.smartContractVoteService.getVoterById(id);
  }

  @Post('/extrinsic/set-voter')
  @ApiCreatedResponse({
    description: 'Set voter extrinsic created succesfully',
    type: SetVoterDto,
    isArray: false,
  })
  setVoterExtrinsic(@Body() data: SetVoterDto): Promise<any> {
    return this.smartContractVoteService.setVoterExtrinsic(data);
  }

  @Get('/get/all-vote')
  getAllVote(): Promise<VoteEntity[]> {
    return this.smartContractVoteService.getAllVote();
  }

  @Get('/get/vote/by-id/:id')
  getVoteById(
    @Param('id') id: number
  ): Promise<VoteEntity> {
    return this.smartContractVoteService.getVoteById(id);
  }

  @Post('/extrinsic/set-vote')
  @ApiCreatedResponse({
    description: 'Set vote extrinsic created succesfully',
    type: SetVoteDto,
    isArray: false,
  })
  setVoteExtrinsic(@Body() data: SetVoteDto): Promise<any> {
    return this.smartContractVoteService.setVoteExtrinsic(data);
  }
}

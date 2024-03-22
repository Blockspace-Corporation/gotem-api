import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { SmartContractVoteService } from './smart-contract-vote.service';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { SetVoteDto } from './dto/set-vote.dto';
import { UpdateVoterDto } from './dto/update-voter-nft.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';

@Controller('api/smart-contract/vote')
@ApiTags('smart contract - vote')
export class SmartContractVoteController {
  constructor(
    private readonly smartContractVoteService: SmartContractVoteService
  ) { }

  @Get('/get/all-voter')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getAllVoter(): Promise<VoterEntity[]> {
    return this.smartContractVoteService.getAllVoter();
  }

  @Get('/get/voter/by-id/:id')
  @ApiResponse({ status: 200, description: 'Returns the current record.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getVoterById(@Param('id') id: number): Promise<VoterEntity> {
    return this.smartContractVoteService.getVoterById(id);
  }

  @Post('/extrinsic/set-voter')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async setVoterExtrinsic(@Body() data: SetVoterDto): Promise<any> {
    try {
      return await this.smartContractVoteService.setVoterExtrinsic(data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/extrinsic/update-voter/:id')
  @ApiResponse({ status: 200, description: 'Creates an unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateVoterExtrinsic(
    @Param('id') id: number,
    @Body() data: UpdateVoterDto
  ): Promise<any> {
    try {
      return await this.smartContractVoteService.updateVoterExtrinsic(id, data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/extrinsic/burn-voter/:id')
  @ApiResponse({ status: 200, description: 'Creates an unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async burnVoterExtrinsic(@Param('id') id: number): Promise<any> {
    try {
      return await this.smartContractVoteService.burnVoterExtrinsic(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/get/all-vote')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getAllVotes(): Promise<VoteEntity[]> {
    return this.smartContractVoteService.getAllVotes();
  }

  @Get('/get/vote/by-id/:id')
  @ApiResponse({ status: 200, description: 'Returns the current record.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getVoteById(@Param('id') id: number): Promise<VoteEntity> {
    return this.smartContractVoteService.getVoteById(id);
  }

  @Get('/get/all-vote/by-evidence-id/:evidence_id')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getAllVotesByEvidenceId(@Param('evidence_id') evidence_id: number): Promise<VoteEntity[]> {
    return this.smartContractVoteService.getAllVotesByEvidenceId(evidence_id);
  }

  @Post('/extrinsic/set-vote')
  @ApiResponse({ status: 200, description: 'Creates an unsigned extrinsic hex value.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async setVoteExtrinsic(@Body() data: SetVoteDto): Promise<any> {
    try {
      return await this.smartContractVoteService.setVoteExtrinsic(data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/extrinsic/update-vote/:id')
  @ApiResponse({ status: 200, description: 'Creates an unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateVoteExtrinsic(
    @Param('id') id: number,
    @Body() data: UpdateVoteDto
  ): Promise<any> {
    try {
      return await this.smartContractVoteService.updateVoteExtrinsic(id, data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/extrinsic/burn-vote/:id')
  @ApiResponse({ status: 200, description: 'Creates an unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async burnVoteExtrinsic(@Param('id') id: number): Promise<any> {
    try {
      return await this.smartContractVoteService.burnVoteExtrinsic(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

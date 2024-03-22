import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmartContractGtxService } from './smart-contract-gtx.service';

@Controller('smart-contract-gtx')
export class SmartContractGtxController {
  constructor(
    private readonly smartContractGtxService: SmartContractGtxService
  ) { }
}

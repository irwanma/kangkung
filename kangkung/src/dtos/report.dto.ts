/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */

import {
    IsNumber,
    IsPositive,
    IsString,
    IsNotEmpty,
    IsOptional,
  } from 'class-validator';
  import { Exclude, Expose } from 'class-transformer';
  import { ReportType } from 'src/data';
  
  export class CreateReportDto {
    @IsPositive()
    @IsNumber()
    amount: number;
  
    @IsString()
    @IsNotEmpty()
    source: string;
  }
  
  export class UpdateReportDto {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    amount: number;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
  }
  
  export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
  
    @Expose({ name: 'createdAt' })
    transformCreatedAt() {
      return this.created_at;
    }
  
    @Exclude()
    created_at: Date;
  
    @Exclude()
    updated_at: Date;
    type: ReportType;
  
    constructor(partial: Partial<ReportResponseDto>) {
      Object.assign(this, partial);
    }
  }
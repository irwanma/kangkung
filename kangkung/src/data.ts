/* eslint-disable prettier/prettier */

export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense',
  }
  
  export const data: Data = {
    report: [
      {
        id: 'uuid1',
        source: 'salary',
        amount: 7500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
      {
        id: 'uuid2',
        source: 'salary',
        amount: 4500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
      {
        id: 'uuid3',
        source: 'salary',
        amount: 7400,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE,
      },
    ],
  };
  
  interface Data {
    report: {
      id: string;
      source: string;
      amount: number;
      created_at: Date;
      updated_at: Date;
      type: ReportType;
    }[];
  }
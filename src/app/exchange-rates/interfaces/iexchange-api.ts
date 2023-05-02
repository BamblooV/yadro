import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface IExchangeAPI {
  fetchExchangeRate(): Observable<IExchangeAPIResponse>;

  add(currencyCode: string): void;

  delete(currencyCode: string): void;
}

export interface IExchangeAPIResponse {
  quotes: {
    [key: string]: number;
  };
  source: string;
  success: boolean;
  timestamp: number;
}

export const IExchangeAPIServiceToken = new InjectionToken(
  'IExchangeAPIServiceToken'
);

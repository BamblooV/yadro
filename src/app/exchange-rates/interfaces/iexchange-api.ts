import { InjectionToken } from '@angular/core';

export interface IExchangeAPI {
  add(currencyCode: string): void;

  delete(currencyCode: string): void;
}

export const IExchangeAPIServiceToken = new InjectionToken(
  'IExchangeAPIServiceToken'
);

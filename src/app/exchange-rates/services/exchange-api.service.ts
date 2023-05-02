import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IExchangeAPI } from '../interfaces/iexchange-api';

@Injectable()
export class ExchangeAPIService implements IExchangeAPI {
  url = 'https://api.apilayer.com/currency_data/live';

  trackedCurrencies = new Set<string>();
  destroy$ = new Observable();

  constructor(private readonly http: HttpClient) {}

  add(currencyCode: string): void {
    this.trackedCurrencies.add(currencyCode);
  }

  delete(currencyCode: string): void {
    this.trackedCurrencies.delete(currencyCode);
  }
}

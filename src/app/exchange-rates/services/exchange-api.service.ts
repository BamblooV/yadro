import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, repeat, switchMap } from 'rxjs';

import {
  IExchangeAPI,
  IExchangeAPIResponse,
} from '../interfaces/iexchange-api';

@Injectable()
export class ExchangeAPIService implements IExchangeAPI {
  private readonly url = 'https://api.apilayer.com/currency_data/live';
  private readonly intervalDelay = 5_000;

  private readonly headers = new HttpHeaders().append(
    'apikey',
    'osaiP68VX6c8DKC1COrFc6ncwotQmCLS'
  );

  private readonly emptyResponse: IExchangeAPIResponse = {
    quotes: {},
    source: 'RUB',
    success: true,
    timestamp: Math.floor(new Date(Date.now()).getTime() / 1000),
  };

  private readonly trackedCurrencies$ = new BehaviorSubject<string[]>([
    'USD',
    'EUR',
    'CAD',
  ]);

  constructor(private readonly http: HttpClient) {}

  fetchExchangeRate(): Observable<IExchangeAPIResponse> {
    return this.trackedCurrencies$.pipe(
      switchMap((currencyCodes) => {
        if (currencyCodes.length > 0) {
          const url = `${this.url}?source=RUB&currencies=${currencyCodes.join(
            ','
          )}`;

          return this.http
            .get<IExchangeAPIResponse>(url, { headers: this.headers })
            .pipe(
              map((data) => {
                return {
                  ...data,
                  quotes: Object.entries(data.quotes).reduce(
                    (res, [key, value]) => {
                      res[key.slice(3)] = 1 / value;

                      return res;
                    },
                    {} as { [key: string]: number }
                  ),
                };
              }),
              repeat({ delay: this.intervalDelay })
            );
        }

        return of(this.emptyResponse);
      })
    );
  }

  add(currencyCode: string): void {
    const oldValue = this.trackedCurrencies$.value;

    if (oldValue.find((code) => code === currencyCode)) {
      return;
    }

    const newValue = [...oldValue, currencyCode];

    this.trackedCurrencies$.next(newValue);
  }

  delete(currencyCode: string): void {
    const oldValue = this.trackedCurrencies$.value;

    if (oldValue.find((code) => code === currencyCode)) {
      const newValue = [...oldValue.filter((code) => code !== currencyCode)];

      this.trackedCurrencies$.next(newValue);
    }
  }
}

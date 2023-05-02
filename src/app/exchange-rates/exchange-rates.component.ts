import { Component, Inject, OnInit } from '@angular/core';

import { ICurrencyItem } from './interfaces/icurrency-item';
import { IExchangeAPIServiceToken } from './interfaces/iexchange-api';
import { ExchangeAPIService } from './services/exchange-api.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.less'],
})
export class ExchangeRatesComponent implements OnInit {
  baseCurrency = 'RUB';
  exchangeCurrencies = ['CNY', 'JPY', 'TRY'];
  expanded = false;
  timestamp = Date.now();
  prevValues: { [key: string]: number } = {};
  currencies: ICurrencyItem[] = [];

  constructor(
    @Inject(IExchangeAPIServiceToken)
    private readonly exchangeService: ExchangeAPIService
  ) {}

  ngOnInit(): void {
    this.exchangeService.fetchExchangeRate().subscribe((data) => {
      this.timestamp = Date.now();
      const newCurrencies: ICurrencyItem[] = [];

      Object.entries(data.quotes).forEach(([key, value]) => {
        const prevCurency = this.currencies.find(
          (item) => item.currencyCode === key
        );

        if (prevCurency) {
          newCurrencies.push({
            currencyCode: key,
            value,
            difference: value - prevCurency.value,
          });

          return;
        }

        newCurrencies.push({ currencyCode: key, value, difference: 0 });
      });
      this.currencies = newCurrencies;
    });
  }

  addCurrency(currencyCode: string): void {
    this.toggle();
    this.exchangeCurrencies = this.exchangeCurrencies.filter(
      (currency) => currency !== currencyCode
    );
    this.exchangeService.add(currencyCode);
  }

  deleteCurrency(currencyCode: string): void {
    this.currencies = this.currencies.filter(
      (item) => item.currencyCode !== currencyCode
    );
    this.exchangeCurrencies = [...this.exchangeCurrencies, currencyCode];
    this.exchangeService.delete(currencyCode);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}

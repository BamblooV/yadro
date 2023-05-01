import { Component } from '@angular/core';

import { ICurrencyItem } from './interfaces/icurrency-item';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.less'],
})
export class ExchangeRatesComponent {
  baseCurrency = 'RUB';
  exchangeCurrencies = ['CNY', 'JPY', 'TRY'];
  expanded = false;
  timestamp = Date.now();

  currencies: ICurrencyItem[] = [
    { currencyCode: 'USD', value: 160.94, difference: 1 },
    { currencyCode: 'EUR', value: 61.31, difference: 0 },
    { currencyCode: 'GBR', value: 70.85, difference: -1 },
  ];

  addCurrency(_currecyCode: string): void {
    this.toggle();
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}

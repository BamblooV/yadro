import { Component } from '@angular/core';

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

  addCurrency(_currecyCode: string): void {
    this.toggle();
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}

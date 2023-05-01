import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.less'],
})
export class ExchangeRatesComponent {
  expanded = false;
  baseCurrency = 'RUB';
  timestamp = Date.now();

  toggle(): void {
    this.expanded = !this.expanded;
  }
}

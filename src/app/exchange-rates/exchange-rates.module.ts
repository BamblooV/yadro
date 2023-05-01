import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';

import { ExchangeRatesComponent } from './exchange-rates.component';

@NgModule({
  declarations: [ExchangeRatesComponent],
  imports: [CommonModule, TuiButtonModule],
  exports: [ExchangeRatesComponent],
})
export class ExchangeRatesModule {}

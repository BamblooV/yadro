import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';

import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { ExchangeRatesComponent } from './exchange-rates.component';

@NgModule({
  declarations: [ExchangeRatesComponent, CurrencyFormComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  exports: [ExchangeRatesComponent, CurrencyFormComponent],
})
export class ExchangeRatesModule {}

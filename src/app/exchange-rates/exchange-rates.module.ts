import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';

import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyItemComponent } from './currency-item/currency-item.component';
import { ExchangeRatesComponent } from './exchange-rates.component';

@NgModule({
  declarations: [
    ExchangeRatesComponent,
    CurrencyFormComponent,
    CurrencyItemComponent,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSvgModule,
  ],
  exports: [
    ExchangeRatesComponent,
    CurrencyFormComponent,
    CurrencyItemComponent,
  ],
})
export class ExchangeRatesModule {}

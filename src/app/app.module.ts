import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { ExchangeRatesModule } from './exchange-rates/exchange-rates.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ExchangeRatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

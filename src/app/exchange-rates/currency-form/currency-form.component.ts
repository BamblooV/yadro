import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.less'],
})
export class CurrencyFormComponent {
  @Input()
  currencies: string[] = [];

  @Output()
  selectedCurrency = new EventEmitter<string>();

  currecyControl = new FormGroup({
    currency: new FormControl('', { validators: Validators.required }),
  });

  submit(): void {
    const value = this.currecyControl.get('currency')?.value;

    if (value) {
      this.selectedCurrency.emit(value);
    }
  }
}

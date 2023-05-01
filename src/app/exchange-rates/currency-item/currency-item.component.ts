import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICurrencyItem } from '../interfaces/icurrency-item';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.less'],
})
export class CurrencyItemComponent {
  @Input()
  item!: ICurrencyItem;

  @Output()
  itemToDelete = new EventEmitter<string>();

  onClick(): void {
    this.itemToDelete.emit(this.item.currencyCode);
  }
}

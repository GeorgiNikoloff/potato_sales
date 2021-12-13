import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import  potatoes  from '../../services/mock/potato_sales.json';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  name = new FormControl('');
  potatoSales = potatoes;

  getTotalPrice(data) {
    let total = 0;
    for (const property in data) {
      if (typeof(data[property]) === 'number') {
        total += data[property];
      }

    }
    return total;
  }
}

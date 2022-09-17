import { Component } from '@angular/core';
import * as _ from 'extra-array';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  elements: string = '';
  result: string[] = [];

  go() {
    const segments = this.elements.split(' ');
    this.result = [];

    for (const w of _.permutations(segments)) {
      if (w.length === segments.length) {
        this.result.push(w.join(''));
      }
    }
  }
}
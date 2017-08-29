import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductsService} from './services/productsService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor ( private productService: ProductsService ) {}

  ngOnInit() {
    const store = this.productService.getStore();
    this.productService.ProductsStore.next(store);
  }
}

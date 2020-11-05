import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any = [];
  constructor(private appService: AppService) { }

  async ngOnInit() {

    const products = await this.appService.getAllProducts().pipe(take(1)).toPromise();
    this.allProducts = products;
  }

}

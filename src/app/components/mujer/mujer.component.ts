import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {
  products: any = [];
  womanProducts: any = [];
  urlImage = 'http://localhost:3000/';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProucts();
  }

  getProucts(){
    this.productsService.getProducts()
      .subscribe((res: any)=>{
       
        this.products = res;
        console.log(this.products);
        this.womanProducts = this.products.filter( p => p.sex === 'mujer');
        console.log(this.womanProducts);
    });
  }

}

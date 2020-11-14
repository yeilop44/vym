import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {

products: any = [];
menProducts: any = [];
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
        this.menProducts = this.products.filter( p => p.sex === 'hombre');
        console.log(this.menProducts);
    });
  }

}

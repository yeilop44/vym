import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalNuevoProductoComponent } from '../shared/modals/modal-nuevo-producto/modal-nuevo-producto.component';


@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {
  products: any = [];
  urlImage = 'http://localhost:3000/';   
  bsModalRef: BsModalRef;
   
  constructor(private productsService: ProductsService, private modalService: BsModalService) {
    
   }

  ngOnInit() {
    this.getProducts();    
  }

  openModalNuevoProducto(){ 
    this.bsModalRef = this.modalService.show( ModalNuevoProductoComponent , { class: 'gray modal-lg'} );
    this.bsModalRef.content.messageEvent.subscribe(data => {
      //console.log('Child component\'s event was triggered:', data); 
      this.getProducts();            
    });      
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  getProducts(){
    this.productsService.getProducts()
      .subscribe((res: any)=>{       
        this.products = res;
        for(let i=0; i<this.products.length; i++){            
          if(this.products[i].availability){
            this.products[i].availability = JSON.parse(this.products[i].availability);
          }         
        }  
    
    });
  }

  deleteProduct(_id: string) {
    if (confirm('Esta seguro de Eliminar este producto?')) {
      this.productsService.deleteProduct(_id)
        .subscribe(res => {
        console.log(res);
        this.getProducts();
      });
    }
  }


    

}

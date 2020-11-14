import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-modal-nuevo-producto',
  templateUrl: './modal-nuevo-producto.component.html',
  styleUrls: ['./modal-nuevo-producto.component.css']
})
export class ModalNuevoProductoComponent implements OnInit {

  availability: any = [{
    sizeAvailability: "",
    quantityAvailability: ""
  }];
  file: File;
  photoSelected: string | ArrayBuffer

  constructor(public bsModalRef: BsModalRef, private productsService: ProductsService) { }

  ngOnInit() {
  }
  
  selectImage(event){
    if(event.target.files){
      this.file = event.target.files[0];
      console.log(this.file);
      //image preview
      const reader = new FileReader();
      reader.onload = e =>  this.photoSelected = reader.result;
      reader.readAsDataURL(this.file)
    }    
  }

  createProduct(name: HTMLInputElement, category: HTMLInputElement, sex: HTMLInputElement, price: HTMLInputElement): boolean{
    //console.log(this.availability);
     this.productsService.postProduct(name.value, category.value, sex.value, price.value as any, this.availability as any, this.file )
       .subscribe(res => {
         //console.log(res);          
       }, err => {
         console.log(err);
       });
     return false;
     this.bsModalRef.hide();    
  }
   
  addField(){
    this.availability.push({
     sizeAvailability: "",
     quantityAvailability: ""
    });
  }

}

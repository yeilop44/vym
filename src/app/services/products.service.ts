import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi = 'http://localhost:3000/api/products/';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.urlApi);
  }

  postProduct(name: string,  category: string, sex: string, price: number, availability: any, productImage: File){
    const fd = new FormData();
    fd.append('name', name);
    fd.append('sex', sex);
    fd.append('category', category);
    fd.append('price', price as any);
    fd.append('availability', JSON.stringify(availability));
    fd.append('productImage', productImage);
    
    return this.http.post(this.urlApi, fd);
  }

  deleteProduct(_id: string) {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.delete(this.urlApi + `/${_id}`,  httpOptions);
  }


}

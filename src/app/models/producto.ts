
export class Producto {
 
    constructor (_id = '', name= '', sex='', category='', price=0, availability=[], productImage="") {

      this._id = _id;
      this.name = name;
      this.sex = sex;
      this.category= category;
      this.price =  price;      
      this.availability = availability;
      this.productImage = productImage;

  }
  
    _id: string;
    name: string;
    sex: string;
    category: string;
    price: number;
    availability:Array<[]>;
    productImage: string;
     

  
  }
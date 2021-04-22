import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../_models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  popupflag=false;
  selecteditem:Products;
  
  getproducts(){
     return this.http.get<Products[]>("http://localhost:63947/api/Products");
   }
   Updateproducts(UpdatedItem,id){
     console.log("UpdatedItem in service",UpdatedItem);
     
    return this.http.put(`http://localhost:63947/api/Products/${id}`,UpdatedItem);
  }
  constructor(private http:HttpClient) { }
}

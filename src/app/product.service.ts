import { Injectable } from '@angular/core';
import { Product } from './product';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http:Http) {

   }
getProducts():any{
  return this._http.get("http://localhost:4200/../assets/products.json")
  .map((response:Response)=>response.json());
  //return [{id:1, name:'mouse',price:10},{id:1, name:'pen',price:40}];
}
}

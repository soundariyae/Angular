import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','./class1.css','./class2.css']
})
export class ProductComponent implements OnInit {
  position:string="right";
  disval:boolean=true;
  imgsrc:string="./assets/AngImg.jpg";
  products=[];
  id:number=1;
  name:string='Pen';
  price:number=100;
  compName:string="";
  empName:String="Soundariya";
mysize:string = "60px";
mycolor:string = "red";
mybgcolor:string = "black";
cone:boolean = true;
ctwo:boolean = false;
today:Number = Date.now();
prdprice:Number = 2000;
threshold:Number = 1000;
toggle(){
  this.cone=!this.cone;
  this.ctwo=!this.ctwo;
}



  constructor(private prodService:ProductService) {
  // this.product={id:1,name:'Pen Object',price:10};
  setTimeout(() => {
    this.disval=false;
  }, 2000);
   }
   ngOnInit(){
    this.prodService.getProducts().subscribe(resProducts=>this.products=resProducts);
   }
displayDetails(){
  this.id=1;
  this.name='Pen';
  this.price=100
  return this.price;
}
discount(){
return "Discounted price is Rs.80";
}

 
  
 onType(event:any){
   this.compName=event.target.value;
 }
  
}

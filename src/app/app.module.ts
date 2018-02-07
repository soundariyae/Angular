import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { MypipePipe } from './mypipe.pipe';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MypipePipe,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'employees',component:EmployeeComponent},
      {path:'departments',component:DepartmentComponent},
      {path:'productList',component:ProductListComponent},

    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

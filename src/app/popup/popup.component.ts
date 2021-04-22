import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsService } from '../_service/products.service';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
selectedproducts=this.servic.selecteditem;


qnty:number=0;
discount:number=this.s.discount;

  constructor(public servic:ProductsService,public s:UsersService,public ar:Router) {}
    
  Purchase()
  { console.log("hhhhhhhh");
     if(this.qnty==this.servic.selecteditem.product_quantity)
     {   this.selectedproducts.Sold_out=1;
      this.selectedproducts.product_quantity=this.selectedproducts.product_quantity-this.qnty;
     this.servic.Updateproducts(this.selectedproducts,this.selectedproducts.product_id).subscribe(a=>{
      console.log(a);
    })
     }
     else{
      this.selectedproducts.product_quantity=this.selectedproducts.product_quantity-this.qnty;
      this.servic.Updateproducts(this.selectedproducts,this.selectedproducts.product_id).subscribe(a=>{
      console.log(a);
    })
     }
    this.ar.navigateByUrl("/Home")

    this.ar.navigate(['Home'])
      .then(() => {
        window.location.reload();
      });
  }
  
  

  ngOnInit(): void {
    console.log("OnInit",this.selectedproducts);
  }

}

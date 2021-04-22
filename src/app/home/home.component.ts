import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../_models/products';
import { ProductsService } from '../_service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Productslist:Products[]=[];
  constructor(public servic:ProductsService,public ar:Router) { }
 flag=this.servic.popupflag;
 flagitems:boolean=true;
 showpopup(selecteditem)
 {console.log("selecteditem",selecteditem);
   this.servic.selecteditem=selecteditem;
  // this.servic.popupflag=true;
  // this.flag=this.servic.popupflag;
  // this.flagitems=false
  this.ar.navigateByUrl("/Purshace")
 }
  ngOnInit(): void {
this.servic.getproducts().subscribe(a=>{
this.Productslist=a;

})
  }

}

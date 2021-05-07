import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //constructor(private backendService: BackendService) {}

  //@ViewChild('productList')
  //productList: ProductListComponent;
  ngOnInit(): void {
    //this.productList.products = this.backendService.getProducts();
   /* this.productList.products = [
    {
    name: 'สมโอ',
    price: 111
    },
    {
    name: 'แตงโม',
    price: 222
    },
    {
    name: 'มะพร่าวนํ้าหอม',
    price: 333
    }
    ];*/
  }
  consyructor() {}
}
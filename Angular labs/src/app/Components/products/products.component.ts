import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { ICategory } from 'src/app/Inetrfaces/icategory';
import { IProduct } from 'src/app/Inetrfaces/iproduct';
import { MyProductsService } from 'src/app/Services/my-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  
  //  component products --> Select + List products + total price 
  // component --> at least only one job 
  //  2 components --> 
        //    parent  --> order --> Select + child  <List products> + total price 


  @Input() selectCatID: number = 0
  @Output() totalPriceChanged : EventEmitter<number>
  totalPrice: number = 0;
  orderDate: Date
  prdFilterCat: IProduct[] = []

  constructor(
    private MyProductService: MyProductsService,
    private activatedRoute:ActivatedRoute,
    private router: Router ,
    private apiservice: APIProductsService
    ) { 
      this.orderDate = new Date()
      this.totalPriceChanged = new EventEmitter<number>()
  }

  ngOnInit(): void {
      // this.prdFilterCat = this.MyProductService.getAllProducts()

      this.apiservice.getAllProducts().subscribe((prd: IProduct[]) => {
        this.prdFilterCat = prd
      })
  }


  ngOnChanges(): void {
      // thsis.filterCatID()2
      // this.prdFilterCat = this.MyProductService.getProductsByCat(this.selectCatID)

      this.apiservice.getProductsByCat(this.selectCatID).subscribe((prd: IProduct[]) => {
        this.prdFilterCat = prd
      })

      console.log("test")


  }
  

  buy(prodPrice: number, count: string){
      this.totalPrice+= prodPrice*+count; // 500
      this.totalPriceChanged.emit(this.totalPrice)
  }

  prodDetails(pid: number){
      this.router.navigate(['products', pid])
  }

}

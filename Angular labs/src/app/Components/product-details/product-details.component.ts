import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Inetrfaces/iproduct';
import { MyProductsService } from '../../Services/my-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProId: number =0;

  prdDetails: IProduct | null  = null

  prdlistId: number[] = []


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private myProducts: MyProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
      // this.currentProId = Number(this.activatedRoute.snapshot.paramMap.get("productId"))
      // console.log(this.currentProId)
      this.prdlistId = this.myProducts.getPrdIDs()
      this.activatedRoute.paramMap.subscribe((paramMap)=> {
        this.currentProId = Number(paramMap.get("productId"))
        this.prdDetails = this.myProducts.getProductByID(this.currentProId)
      })

  }


  goBack(){
      this.location.back()
  }

  goPrev(){
      let currentIndex = this.prdlistId.findIndex((prdIndex) => prdIndex == this.currentProId)
      if(currentIndex> 0){
        let prevProduct = this.prdlistId[currentIndex-1];
        // console.log(prevProduct)
        this.router.navigate(["/products", prevProduct])
      }
  } 

  goNext(){
    let currentIndex = this.prdlistId.findIndex((prdIndex) => prdIndex == this.currentProId)
    if(currentIndex < this.prdlistId.length-1){
      let nextProduct = this.prdlistId[currentIndex+1];
      console.log(nextProduct)
      this.router.navigate(["/products", nextProduct])

    }
    
  }

}

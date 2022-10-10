import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Inetrfaces/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {

  catList: ICategory[];
  ParenteslectedCatID:number = 0;
  
  RecivedTotalPrice : number = 0;

  @ViewChild("username") userName !: ElementRef // non-null assertion  
  // username : ElemntRef | null 
 @ViewChild(ProductsComponent) prodListComp !: ProductsComponent
 
  constructor() { 
    this.catList = [
      {id: 1 , name: "laptops"},
      {id: 2 , name: "Tablets"},
      {id: 3 , name: "Mobiles"},
      {id: 4 , name: "test"},
      {id: 5 , name: "test2"},

    ]


  }

  
  ngAfterViewInit(): void {
      // if(this.userName){
      this.userName.nativeElement.value = "enter your username"
      this.userName.nativeElement.style.border = "3px solid red"
    // }

  }


  ngOnInit(): void {
  }

  parentFunction() :void{
    console.log("test")
  }


  onTotalPriceChanged(total: number): void{
        this.RecivedTotalPrice = total
  }
 
  completeOrder(){
    // console.log()
    // this.prodListComp.prdList[0].quantity -= 1
  }


}

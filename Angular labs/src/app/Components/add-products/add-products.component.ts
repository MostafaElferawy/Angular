import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { ICategory } from 'src/app/Inetrfaces/icategory';
import { IProduct } from 'src/app/Inetrfaces/iproduct';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  catList: ICategory[];
  newPrd: IProduct = {} as IProduct;

  constructor(private apiservice: APIProductsService, private route: Router) {
    this.catList = [
      {id: 1 , name: "laptops"},
      {id: 2 , name: "Tablets"},
      {id: 3 , name: "Mobiles"},
      {id: 4 , name: "test"},
      {id: 5 , name: "test2"},
    ]
   }

  ngOnInit(): void {
  
  }
 
  addProduct(){
        // const prd: IProduct = {
        //   id: 220,
        //   name: "new product added from service",
        //   price: 3000,
        //   quantity: 5,
        //   imageURL: "https://placehold.jp/100x100.png",
        //   categoryID: 2
        // }

        const observer = {
          next: (prd: IProduct) => {
            alert("added succesfully")
            this.route.navigateByUrl('/products')
            
          },
          error: (err: Error)=> {alert(err.message)}
        }

        this.apiservice.addProducts(this.newPrd).subscribe(observer)


  }

}

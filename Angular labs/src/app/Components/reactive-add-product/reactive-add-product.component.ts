import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { ICategory } from '../../Inetrfaces/icategory';
import { IProduct } from '../../Inetrfaces/iproduct';

@Component({
  selector: 'app-reactive-add-product',
  templateUrl: './reactive-add-product.component.html',
  styleUrls: ['./reactive-add-product.component.css']
})
export class ReactiveAddProductComponent implements OnInit {
    //  FormGroup 
    // FormControlName
    // FormControl

    addProduct: FormGroup;

  catList: ICategory[];
  constructor(private route: Router,  private apiservice: APIProductsService) {
    this.catList = [
      {id: 1 , name: "laptops"},
      {id: 2 , name: "Tablets"},
      {id: 3 , name: "Mobiles"},
      {id: 4 , name: "test"},
      {id: 5 , name: "test2"},
    ]

    this.addProduct = new FormGroup({
      name: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
          ]),
      price: new FormControl("", Validators.required),   
      quantity: new FormControl("", Validators.required),    
      imageURL: new FormControl("", Validators.required),    
      categoryID: new FormControl("", Validators.required),    
    })
   }

  ngOnInit(): void {
  }

  
  get formControl(){
    return this.addProduct.controls;
  }

  addProductReactive(){
    let myFrom : IProduct = this.addProduct.value as IProduct

    const observer = {
      next: (prd: IProduct) => {
        alert("added succesfully")
        this.route.navigateByUrl('/products')
        
      },
      error: (err: Error)=> {alert(err.message)}
    }

    this.apiservice.addProducts(myFrom).subscribe(observer)

  }

}

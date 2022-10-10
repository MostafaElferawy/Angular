import { Injectable } from '@angular/core';
import { IProduct } from '../Inetrfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {
  private prdList: IProduct[];


  constructor() { 
    this.prdList = [
      {id: 1, name: "Lenovo laptops", price: 100000000, quantity: 1, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 1 },
      {id: 2, name: "Samsung Tablets", price: 20000000, quantity: 1, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 2 },
      {id: 3, name: "Nokia Mobile", price: 3000000, quantity: 2, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 3 },
      {id: 4, name: "Apple Mobile", price: 30000, quantity: 2, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 3 },
      {id: 5, name: "MacBook laptops", price: 300, quantity: 2, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 1 },
    ]
  }


  getAllProducts(){
    return this.prdList;
  }


  getProductsByCat(selectCatID:number) : IProduct[] {
    if( selectCatID == 0 ){
      return this.prdList
    }else{
      return this.prdList.filter(prd => prd.categoryID == selectCatID)
    }
  }

  getProductByID(productID: number) : IProduct | null{
    let  findProduct  = this.prdList.find(prd => prd.id == productID)
    return findProduct ? findProduct: null
  }

  getPrdIDs(): number[]{

    let prdIds : number[] = this.prdList.map(prd=> prd.id)
    console.log(prdIds)
    return prdIds;

  }

}

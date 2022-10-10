import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { AdsService } from 'src/app/Services/ads.service';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { IProduct } from 'src/app/Inetrfaces/iproduct';
import { UserAuthService } from 'src/app/Services/user-auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscripe: Subscription[] = [];
  isUserLoggedSuject: boolean = false

  page = 1;
  cats: any[] = []


  products: IProduct[] = []
  constructor(
      private adsService: AdsService,
      private userauth: UserAuthService, 
      private apiservice: APIProductsService) { }

  onScroll(): void{
    this.apiservice.getPagination(++this.page)
    .subscribe((products: IProduct[]) => {
      this.products.push(...products)
    })

  } 


  ngOnInit(): void {

    this.apiservice.getPagination(this.page)
    .subscribe((products: IProduct[]) => {
      this.products = products
    })

    let observer = {
      next: (data: string) => {
              console.log(data);
            },
            error: (err: string) => {
              console.log(err);
            },
            complete: () => {
              console.log("Ads Finsihed!")
            }
    }

    let filteroservable = this.adsService.getAds(2).pipe(
      filter(ads => ads.includes("Sale"))
      ,map(ads => "ads:" + ads)
    )
    let adsSubscripe = filteroservable.subscribe(observer)
    this.subscripe.push(adsSubscripe)

  }

  showAlert(){
    alert("hello world")
  }


  ngDOCheck() {
    console.log("ngDOCheck")
  }

  ngOnDestroy(): void {
    // this.subscripe.unsubscribe()
    // console.log(this.subscripe)
    this.subscripe[0].unsubscribe()
  }

  login(){
    this.userauth.login("username", "password")
    this.isUserLoggedSuject = this.userauth.isUserLogged // true

  }

  logout(){
    this.userauth.logout()
    this.isUserLoggedSuject = this.userauth.isUserLogged // false
  }


  

}

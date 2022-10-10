import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private adsList : string[] = []

  constructor() { 
    this.adsList = [
      "New Ads",
      "Sale up to 50%",
      "Sale up to 70%",
      "",
      "Big Sale"
    ]
  }

  getAds(time: number):  Observable<string>{

    return new Observable<string> ((observer) => {
      let counter = 0;
      let adsTime = setInterval(() => {
        // console.log("set interval")
        observer.next(this.adsList[counter])

        if(counter == this.adsList.length){
          observer.complete()
        }
        if(this.adsList[counter] == ""){
          observer.error("Error !")
        }
        counter++;
      }, time*1000)

      return {
        unsubscribe(){
          clearInterval(adsTime)
        }
      }

    })
  }
}

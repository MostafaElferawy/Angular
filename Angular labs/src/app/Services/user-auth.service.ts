import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLogged: BehaviorSubject<boolean>
  constructor() { 
    this.isLogged = new BehaviorSubject<boolean> (this.isUserLogged)
  }

//  subject 
 
  
  login(username: string, password: string){
      let userToken = "123456"
      localStorage.setItem("token", userToken)
      this.isLogged.next(true)

  }

  logout(){
    localStorage.removeItem("token")
    this.isLogged.next(false)

  }

  isUserLogged():boolean{
    return(localStorage.getItem("token")) ? true : false
  }

  getStatus(): Observable<boolean>{
    return this.isLogged.asObservable()
  }


}

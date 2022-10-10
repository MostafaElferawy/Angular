import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth-service.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  isLogged : boolean;
  constructor( private userauth: UserAuthService) {
      this.isLogged = this.userauth.isUserLogged;
      console.log(this.isLogged)

   }

  ngOnInit(): void {
    this.userauth.getloggedStatus().subscribe((status: boolean) => 
      this.isLogged = status 
      )
      console.log(this.isLogged, "status" )
  }

}

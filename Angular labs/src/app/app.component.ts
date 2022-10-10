import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  myTitle = "Hello World";

  name = "ahmed"

  constructor(){
    console.log("CONSTRUCTOR")
  }

  ngOnInit(): void{
    // console.log("NG ON INIT")
    // alert("ng on init")
  }

  ngDOCheck() {
    console.log("ngDOCheck")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }

  ngAfterViewInit(){
    // alert("ngAfterViewInit")
  }


}

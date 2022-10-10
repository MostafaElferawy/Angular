import { Directive, ElementRef, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective  implements OnChanges{

  @Input("BorderBox") myColor : string = "blue"

  @Input()  DefaultColor : string  = "yellow"

  
  
  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `2px solid ${this.DefaultColor}`;
  }

  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.DefaultColor}`;
  }
  
 @HostListener("mouseover") onMouseOver(){
    this.elemRef.nativeElement.style.border =  `2px solid ${this.myColor} `;

  }

  @HostListener("mouseout")onMouseOut(){
    this.elemRef.nativeElement.style.border = `2px solid ${this.DefaultColor}`;
  }




}

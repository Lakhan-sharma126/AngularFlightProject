import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  @HostBinding('style.border')
  border!: string;
  el: ElementRef<any>;

  constructor(el:ElementRef) { 
    this.el=el;
    
    
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.border = '5px solid green';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.border = "";
  }
  
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  ngOnInit() {
    console.log("directive : ", +this.appHighlight);
    this.el.nativeElement.style.backgroundColor =this.appHighlight;
  }  
}

import { Directive,ElementRef,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
    standalone: true
})
export class Highlight implements OnInit {
  // input receives the price value from host element
  @Input('appHighlight') price!: number;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // highlight premium events (price > 2000)
    if (this.price > 2000) {
      // light gold background and slight border
      this.el.nativeElement.style.backgroundColor = 'lightgoldenrodyellow';
      this.el.nativeElement.style.border = '1px solid #e6c675';
    }
  }
  

}

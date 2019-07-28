import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  // @HostListener('focus') onFocus() {
  //   console.log("On focus")
  // }

  @HostListener('blur') onblur() {

    let value: string = this.el.nativeElement.value
    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }

}

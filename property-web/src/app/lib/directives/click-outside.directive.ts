import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside) {
      const menuCheckbox = document.getElementById('check') as HTMLInputElement;
      if (menuCheckbox?.checked) {
        menuCheckbox.checked = false;
      }
    }
  }
}

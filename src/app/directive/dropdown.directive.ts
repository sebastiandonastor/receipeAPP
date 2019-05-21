import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective {
    constructor(private _el: ElementRef) { }
        @HostBinding('class.show') isOpen = false;
        
        @HostListener('click') toogleOpen() {
            this.isOpen = !this.isOpen;
            this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
        }
}
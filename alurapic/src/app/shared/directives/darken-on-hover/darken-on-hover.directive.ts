import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
    @Input() brightness = '70%'

    constructor(private _el: ElementRef, private _render: Renderer) { }

    @HostListener('mouseover')
    darkenOn() {
        this._render.setElementStyle(this._el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }
    @HostListener('mouseleave')
    darkenOff() {
        this._render.setElementStyle(this._el.nativeElement, 'filter', 'brightness(100%)');
    }
}
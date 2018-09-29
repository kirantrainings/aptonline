import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector :'[hoverDirective]'
})

export class HoverDirective{
    constructor(private ele:ElementRef){
        //console.log(this.ele.nativeElement);
    }
    @HostListener('mouseover',['$event'])
    mouseInEvent(evt){
        console.log(evt.target);
        evt.target.style='color:red';
    }
    @HostListener('mouseout',['$event'])
    mouseOutEvent(evt){
        console.log(evt.target);
        evt.target.style='color:black';
    }
}
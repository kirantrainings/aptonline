import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector :'[keyindirective]'
})

export class KeyInDirective{
    constructor(private ele:ElementRef){
        //console.log(this.ele.nativeElement);
    }
    @HostListener('keypress',['$event'])
    keypress(evt){
        console.log(evt.target);
        let x = evt.key;
        var exp = new RegExp(/^[a-zA-Z ]*$/);

        if(!exp.test(x)){
            evt.preventDefault();
        }       
    }
}
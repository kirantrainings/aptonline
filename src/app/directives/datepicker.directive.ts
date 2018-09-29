import { Directive, ElementRef, HostListener, Input, OnInit,Output, EventEmitter } from '@angular/core';
declare var '$';
@Directive({
    selector: '[datepickerdirective]'
})

export class DatePickerDirective implements OnInit{
    constructor(private ele: ElementRef) {
       
        this.dateSelected = new EventEmitter<any>();

    }
    @Output()
    dateSelected:EventEmitter<any>

    ngOnInit(){
        console.log(this.maxdate);
        console.log(this.mindate);
        $(this.ele.nativeElement).datepicker({
            minDate:this.mindate,
            maxDate:this.maxdate,
            onSelect:(selecteDate)=>{
                console.log('Date selected');
                console.log(selecteDate);
                this.dateSelected.emit(selecteDate);
            }
        });
    }

    @Input()
    maxdate: any

    @Input()
    mindate: any


}
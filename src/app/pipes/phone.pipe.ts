import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'formatphone'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(input: String, criteria) {
        if (input && input.length == 10) {
            if (criteria == 'USA') {
                return input.substring(0, 3) + '-' + input.substring(3, 6) + '-' + input.substring(6, 10);
            }
            else if (criteria == 'IN') {
                return input.substring(0, 5) + '-' + input.substring(5, 10);
            }
            else {
                return input;
            }
        }
        else {
            return input;
        }
    }
}
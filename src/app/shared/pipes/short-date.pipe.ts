import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})

export class ShortDatePipe implements PipeTransform {
  transform(value: string, args?: any) {
    if (!value) {
      return null;
    }
    return value.substr(0, 19);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return value.toUpperCase()
  }

}

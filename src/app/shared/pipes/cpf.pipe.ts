import { Pipe, PipeTransform } from '@angular/core';
import {mask} from '../utils/mask'

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  mask: string = "999.999.999-99"

  transform(value: any, args?: any): any {
    return mask(value, this.mask);
  }

}

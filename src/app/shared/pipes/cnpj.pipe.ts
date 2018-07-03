import { Pipe, PipeTransform } from '@angular/core';
import {mask} from '../utils/mask'

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {
  mask: string = "99.999.999/9999-99"

  transform(value: any, args?: any): any {
    return mask(value, this.mask);
  }

}

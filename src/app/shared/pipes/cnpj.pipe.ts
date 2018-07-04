import { Pipe, PipeTransform } from '@angular/core';
import {mask} from '../utils/mask'
import {masks} from '../helpers/consts'

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return mask(value, masks['CNPJ']);
  }

}

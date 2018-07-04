import { Pipe, PipeTransform } from '@angular/core';
import { maskFormat } from '../utils/mask-format'
import { masks } from '../helpers/consts';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return maskFormat(value, masks['CPF']);
  }

}

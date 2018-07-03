import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipe implements PipeTransform {
  mask: string = '999.999.999-99'
  transform(value: any, args?: any): any {
    var valor = value.replace(/\D/g, '');
    var pad = this.mask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);

    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < this.mask.length; i++) {
      if (isNaN(parseInt(this.mask.charAt(i)))) {
        valor += this.mask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
 
    value = valor;

    return value;
  }

}

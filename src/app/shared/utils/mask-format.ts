export const maskFormat = (value: any, mask: string): string => {
    var valor = value.replace(/\D/g, '');
    var pad = mask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
    
    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < mask.length; i++) {
      if (isNaN(parseInt(mask.charAt(i)))) {
        valor += mask.charAt(i);
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
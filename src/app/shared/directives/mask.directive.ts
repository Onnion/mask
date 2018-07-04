import { Directive, HostListener, Input } from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';

import {mask} from '../utils/mask'
import {masks} from '../helpers/consts'
 
@Directive({
  selector: '[mask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: MaskDirective, 
    multi: true 
  }]
})
export class MaskDirective implements ControlValueAccessor {
 
  onTouched: any;
  onChange: any;
 
  @Input('mask') type: string;

  writeValue(value: any): void {}
  registerOnChange(fn: any): void {this.onChange = fn;}
  registerOnTouched(fn: any): void {this.onTouched = fn;}
 

  
  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {
    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      return;
    }else{
      $event.target.value = mask($event.target.value, masks[this.type])
    }
  }
  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    if ($event.target.value.length === masks[this.type].length) {
      return;
    }
    $event.target.value = '';
  }






}





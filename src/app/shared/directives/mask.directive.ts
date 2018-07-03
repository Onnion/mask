import { Directive, HostListener, Input } from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';

import {mask} from '../utils/mask'
 
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
 
  @Input('mask') mask: string;
 
  writeValue(value: any): void {}
  registerOnChange(fn: any): void {this.onChange = fn;}
  registerOnTouched(fn: any): void {this.onTouched = fn;}
 
  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      return;
    }else{
      $event.target.value = mask($event.target.value, this.mask)
    }
 
  }
 
  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    if ($event.target.value.length === this.mask.length) {
      return;
    }
    $event.target.value = '';
  }
}





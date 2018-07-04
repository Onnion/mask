import { Directive, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { masks } from '../helpers/consts/consts.helpers';
import { maskFormat } from '../utils/mask.utils';

@Directive({
  selector: '[mask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDirective,
    multi: true
  }]
})
export class MaskDirective implements ControlValueAccessor {

  @Input('mask') type: string;

  private onTouched: any;
  private onChange = (value: any) => {};

  writeValue(value: any): void { this.onChange(value); }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }


  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {

    if ($event.keyCode !== 8) {
      const newValue = maskFormat($event.target.value, masks[this.type]);
      this.tranform($event, newValue);

    }

  }


  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length > masks[this.type].length) {
      const newValue = $event.target.value.slice(0, 14);
      this.tranform($event, newValue);
    }

  }


  private tranform = ($event, value) => {
    $event.target.value = value;
    this.writeValue(value);
  }


}

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
  private localType: string;
  private onChange = (value: any) => {};

  writeValue(value: any): void { this.onChange(value); }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }


  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let _mask = masks[this.type.toUpperCase()];

    if ($event.keyCode !== 8) {

      if (this.type.toUpperCase() === 'PHONE') {
        const length = $event.target.value.length;
        if (length > 14) {
          this.localType = 'PHONE_D';
          _mask = masks[this.localType];

        }

      }

      const newValue = maskFormat($event.target.value, _mask);
      this.transform($event, newValue);

    } else {
      let newValue = $event.target.value;

      if (this.type.toUpperCase() === 'PHONE') {
        const length = $event.target.value.length;
        if (length > 14) {
          newValue = maskFormat($event.target.value, masks['PHONE']);
        }

      }

      this.transform($event, newValue);

    }

  }


  @HostListener('blur', ['$event'])
  onBlur($event: any) {

    const type = this.localType ? this.localType : this.type;

    if ($event.target.value.length > masks[type.toUpperCase()].length) {
      const newValue = $event.target.value.slice(0, masks[this.type.toUpperCase()].length);
      this.transform($event, newValue);
    }

  }


  private transform = ($event, value) => {
    $event.target.value = value;
    this.writeValue(value);
  };

}

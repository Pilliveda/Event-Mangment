import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number): string {
    // ensure number
    if (value == null || isNaN(value)) return '₹0.00';
    // en-IN locale formats with commas; ensure 2 decimal places
    return '₹' + value.toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }
}

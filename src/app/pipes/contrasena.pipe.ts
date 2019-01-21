import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {
    if (activar) {
      let stringCar = '';
      for (let i = 0; i < value.length; i++) {
        stringCar += '*';
      }

      return stringCar;

    } else {
      return value;
    }
  }
}

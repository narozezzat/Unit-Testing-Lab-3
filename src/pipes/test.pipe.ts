import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  static transform(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  transform(value: any, ...args: any[]): any {
    if (null !== value && !isNaN(value)) {
      return value + 4;
    } else {
      return 'Not a number';
    }
  }
}

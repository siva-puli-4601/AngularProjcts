import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetest',
  standalone: true
})
export class PipetestPipe implements PipeTransform {

  transform(age:any, wish:string): string {
    if(age>=18)
    return "right to vote   "+wish;
    else
    return "not right to vote  "+wish;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(price: number, threshold: number): any {
    if(price>threshold)
    return "High";
    else
    return "Low";
  }
  

}

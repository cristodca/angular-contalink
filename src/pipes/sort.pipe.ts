import { Pipe, PipeTransform } from '@angular/core';
import * as lodash from 'lodash';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], key: string, sort: any = 'desc'): Product[] {
    return lodash.orderBy(products, [key], [sort]);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenArticulo'
})
export class ImagenArticuloPipe implements PipeTransform {

  transform(value: string, codigo: string): string {
    const url: string = '../../assets/productos/' + codigo + '/' +  value + '.jpg';
    return url;
  }

}

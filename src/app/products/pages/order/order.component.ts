import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public sortBy?: keyof Hero

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ]

  //Usando el Pipe i18nPlural pasamos los colores a strings
  public colorsMap = {
    '=0': 'Rojo',
    '=1': 'Negro',
    '=2': 'Azul',
    '=3': 'Verde',
  }

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder( value: keyof Hero) {
    this.sortBy = value
  }

}
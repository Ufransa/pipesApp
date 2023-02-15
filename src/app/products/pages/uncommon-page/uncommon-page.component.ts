import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html'
})
export class UncommonPageComponent {

  // TODO: i18n Select
  public name: string = 'Francisco'
  public gender: 'male'|'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa'
    this.gender = 'female'
  }


  // TODO: i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando', 'Francisco', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift()
  }

   // TODO: KeyValue Pipe
   public person = {
    name: 'Fran',
    age: 30,
    address: 'Madrid, España',
  }

  //TODO: Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  )

  public promiseValue: Promise<string> = new Promise( ( resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.')
    }, 3500)
  })

}

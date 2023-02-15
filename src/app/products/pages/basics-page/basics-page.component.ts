import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLower: string = 'FRANCISCO'
  public nameUpper: string = 'francisco'
  public fullName: string = 'fRaNcIsCo'

  public customDate: Date = new Date()

}

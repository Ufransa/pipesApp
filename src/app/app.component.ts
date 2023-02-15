import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

/* 
https://primeng.org/setup
https://angular.io/api/common/SlicePipe
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}

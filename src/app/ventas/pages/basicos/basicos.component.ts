import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  public nombreLower: string = 'fernando';
  public nombreUpper: string = 'FERNANDO';
  public nombreCompleto: string = 'fErnAndo herRera';

  fecha: Date = new Date();
}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  public nombre: string = 'Fernando'; 
  public genero: string = 'masculino';

  public invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  public cambiarPersona(): void {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Sofia', 'Gustavo'];

  public clientesMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  public eliminarClientes() {
    this.clientes.pop();
  }


  //KeyValue Pipe
  public persona = {
    nombre: 'Gabriel',
    edad: 35,
    direccion: 'Veracruz'
  }

  //JSON pipe
  public heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4

  valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promosea');
      }, 3500);
  })
 
}

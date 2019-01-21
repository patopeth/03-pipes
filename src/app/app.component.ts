import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Patricio';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  a = 0.234;

  salario = 5000.3434;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Siempre viva',
      casa: '19'
    }
  };

  palabra = 'hola hijo de puta';
  fecha = new Date();
  video = 'Wul2yeGo3Wk';
  activar = true;

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llegó la data'), 3500);

  });

  mierdacaca(): any {
    let caca = new Heroe('asdad', 2);

    return caca;
  }

}


export class Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  id?: number;

  constructor(nombre: string, id?: number) {
    this.id = id;
    this.nombre = nombre;
  }
}

export interface Heroe2 {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  id?: number;
}

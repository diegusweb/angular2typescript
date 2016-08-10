import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hola-angular',
  template: '<h1> {{saludo}} </h1>'
})

class HolaAngularComponent{
  saludo: string;
  constructor(){
    this.saludo = 'Hola Mundo Angular2';
  }
}

bootstrap(HolaAngularComponent); //COmponente es bootstrap

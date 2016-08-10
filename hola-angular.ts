import { Component } from '@angular/core';
import { Component } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hola-angular',
  template: '<h1> {{saludo}} </h1>'
})

class HolaAngularComponent{
  saludo: string;
}

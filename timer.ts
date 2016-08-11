import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector:'timer',
  template:'<h1>{{minutos}}:{{segundos}} </h1>'
})
class TimeComponent{
  minutos: number;
  segundos : number;

  constructor(){
    this.minutos = 24;
    this.segundos = 59;
  }
}

bootstrap(TimeComponent);

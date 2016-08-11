import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector:'timer',
  template:"<h1>{{minutos}}:{{segundos | number: '2.0' }} </h1> <p><button (click)='togglePause()'>{{buttonLabel}}</button></p>"
})
class TimeComponent{
  minutos: number;
  segundos : number;
  isPaused:boolean;
  buttonLabel:string;

  constructor(){
    this.resetTest();
    setInterval(() => this.tick(), 1000);
  }

  resetTest(): void{
    this.minutos = 24;
    this.segundos = 59;
    this.buttonLabel = "Empezar";
    this.togglePause();
  }

  private tick():void{
    if(!this.isPaused){
      this.buttonLabel = 'Detener';
    }

    if(--this.segundos < 0){
      this.segundos = 59;
      if(--this.minutos < 0){
        this.resetTest();
      }
    }
  }

  togglePause():void{
    this.isPaused = !this.isPaused;
    if(this.minutos < 24 || this.segundos < 59){
      this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
    }
  }

}

bootstrap(TimeComponent);

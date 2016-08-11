import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'timer',
  template: `
    <div class="text-center">
      <img src="assets/img/reloj.png" alt="Reloj">
      <h1> {{ minutos }}:{{ segundos | number: '2.0' }} </h1>
      <p>
        <button (click)="togglePause()"
          class="btn btn-info">
          {{ buttonLabel }}
        </button>
      </p>
    </div>
`
})


class TimerComponent {
  minutos: number;
  segundos: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void {
    this.isPaused = true;
    this.minutos = 24;
    this.segundos = 59;
    this.buttonLabel = 'Empezar';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pausar';

      if (--this.segundos < 0) {
        this.segundos = 59;
        if (--this.minutos < 0) {
          this.resetTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutos < 24 || this.segundos < 59) {
      this.buttonLabel = this.isPaused ? 'Reanudar' : 'Pausar';
    }
  }
}

bootstrap(TimerComponent);

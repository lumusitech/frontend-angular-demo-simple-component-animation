import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({ 'background-color': 'red' })),
      state('amarillo', style({ 'background-color': 'yellow' })),
      state('verde', style({ 'background-color': 'green' })),
      transition('rojo => amarillo', animate(500)),
      transition('amarillo => verde', animate('.5s ease-in')),
      transition('verde => rojo', animate(500, style({
        transform: 'scale(3)'
      }))),
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: .5, transform: 'translateX(100px)', offset: .70 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  color: string;
  constructor() {
    this.color = 'amarillo';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') this.color = 'amarillo';
      else if (this.color === 'amarillo') this.color = 'verde';
      else if (this.color === 'verde') this.color = 'rojo';
    }, 3000)
  }
}


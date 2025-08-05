import { Component } from '@angular/core';
import { Contador } from './core-library-challenges/junior/componentes/contador/contador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Contador, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-studies-challenges';

  mostrarContador = true;
}

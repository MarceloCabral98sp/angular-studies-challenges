import { Component } from '@angular/core';
import { Contador } from './core-library-challenges/junior/componentes/contador/contador';
import { CommonModule } from '@angular/common';
import { BoasVindas } from './core-library-challenges/junior/componentes/boas-vindas/boas-vindas';

@Component({
  selector: 'app-root',
  imports: [BoasVindas, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-studies-challenges';

  public name: string = 'Marcelo';
}

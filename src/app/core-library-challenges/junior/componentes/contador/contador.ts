import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss'
})
export class Contador implements OnInit, OnDestroy {
  
  public contador = 0;
  public intervalo: any;

  ngOnInit(): void {
    console.log('ContadorComponent inicializado');
    this.intervalo = setInterval(() => {
      console.log(this.contador);
      this.contador++;
    }, 1000)
  }

  ngOnDestroy(): void {
    console.log('ContadorComponent destruído');
    clearInterval(this.intervalo);
  }
}

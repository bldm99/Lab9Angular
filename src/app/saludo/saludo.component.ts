
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo', //nombre del componete para poderlo llamar 
  templateUrl: './saludo.component.html', //ruta de su respectivo html
  styleUrls: ['./saludo.component.css'] //ruta de sus respectivo css
})
export class SaludoComponent implements OnInit {
  titulo: string = '¡Bienvenido a Angular!';
  mensaje: string = 'Este es un componente de saludo creado en Angular.';

  constructor() { }

  ngOnInit(): void {
  }
}


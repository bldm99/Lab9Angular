import { Component, OnInit } from '@angular/core';

const tareas = [
  {
    nombre: "Node js y espress",
    puesto: "Lunes",
    foto: "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    equipo: "Web",
  },
  {
    nombre: "CloudFormation",
    puesto: "Viernes",
    foto: "https://blog.adobe.com/en/publish/2021/08/31/media_1649ebc3fbbce0df508081913819d491fc3f7c7a9.png?width=2000&format=webply&optimize=medium",
    equipo: "AWS",
  },
  {
    nombre: "Prpos y Hooks",
    puesto: "Miercoles",
    foto: "https://www.bacancytechnology.com/blog/wp-content/uploads/2019/08/React-UI-Component-Libraries-min.png",
    equipo: "React Avanzado",
  },
  {
    nombre: "Componetes en Angular",
    puesto: "Domingo",
    foto: "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/09/angular-homepage.jpg",
    equipo: "Angular",
  },
  
];


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})


export class TareasComponent implements OnInit {

  titulo: string = '¡Bienvenido a Angular!';
  mensaje: string = 'Este es un componente de saludo creado en Angular.';
  datos: any[] = tareas;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'Clon de Threads con React JS, Frontend Moderno',
      description: 'Aplicación web moderna desarrollada con React, enfocada en una interfaz de usuario intuitiva y responsive.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      image: 'angular.png',
      url: 'https://tu-proyecto-react.com'
    },
    {
      id: 2,
      title: 'Sistema de Facturación e Inventario con Angular JS y Nest JS',
      description: 'Sistema completo con Angular en el frontend, NestJS como backend y PostgreSQL como base de datos.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript'],
      image: 'angular.png',
      url: 'https://avilaprofacturacion.web.app/home'
    },

    {
      id: 3,
      title: 'Pagina de una Agencia de Marketing Digital con Express JS y Bootstrap',
      description: 'Desarrollo web utilizando Express.js para el backend y Bootstrap para un diseño responsive y moderno.',
      technologies: ['Express.js', 'Bootstrap', 'JavaScript', 'Node.js'],
      image: 'angular.png',
      url: 'https://tu-proyecto-express.com'
    }
  ];

  openProject(url: string): void {
    window.open(url, '_blank');
  }
}

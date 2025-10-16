import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Header, About, Skills, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  imports: [Header, About, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

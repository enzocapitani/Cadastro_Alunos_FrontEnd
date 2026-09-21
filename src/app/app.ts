import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbaCadastro } from './components/aba-cadastro/aba-cadastro';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro-aluno');
}

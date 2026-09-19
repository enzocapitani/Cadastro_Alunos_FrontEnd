import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbaCadastro } from './components/aba-cadastro/aba-cadastro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AbaCadastro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro-aluno');
}

import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno-service/aluno-service';
import { Aluno } from '../../types/Aluno';

@Component({
  imports: [],
  selector: 'app-aba-alunos',
  styleUrl: './aba-alunos.css',
  templateUrl: './aba-alunos.html',
})
export class AbaAlunos implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService){};

  async ngOnInit(){
    console.log("ANTES:", this.alunos.length)
    
    this.alunos = await this.alunoService.receberAlunos();

    console.log("Alunos Recebidos:",this.alunos);
    console.log("DEPOIS:", this.alunos)
  }

}

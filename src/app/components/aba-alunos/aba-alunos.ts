import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private alunoService: AlunoService, private cdr: ChangeDetectorRef){};

  async ngOnInit(){
    console.log("ANTES:", this.alunos.length);

    const alunosRecebidos = await this.alunoService.receberAlunos();
    setTimeout(() => {
      console.log("Depois de 1 segundo:", this.alunos);
    }, 1000);

    console.log("RECEBIDOS:", alunosRecebidos);

    this.alunos = alunosRecebidos;

    this.cdr.detectChanges();

  }

}

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

  erroAoCarregar = false;
  
  constructor(private alunoService: AlunoService, private cdr: ChangeDetectorRef){};

  async ngOnInit(){
    try {
      
      const alunosRecebidos = await this.alunoService.receberAlunos();
      this.alunos = alunosRecebidos;
      this.cdr.detectChanges();

    } catch (error) {

      this.erroAoCarregar = true;
      this.cdr.detectChanges();
      
    }
  }

}
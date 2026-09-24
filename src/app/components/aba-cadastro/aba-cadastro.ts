import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlunoService } from '../../service/aluno-service/aluno-service';
import { CursoService } from '../../service/curso-service/curso-service';

@Component({
  imports: [FormsModule],
  selector: 'app-aba-cadastro',
  styleUrl: './aba-cadastro.css',
  templateUrl: './aba-cadastro.html',
})

export class AbaCadastro implements OnInit{

  aluno = {
    nome: '',
    bairro: '',
    data_nascimento: '',
    curso: '',
  };

  cursos = [];

  erroAoCarregar = false;

  constructor(private alunoService: AlunoService, 
    private cursoService: CursoService,
    private cdr: ChangeDetectorRef 
  ){};

  async ngOnInit(){
    try{
      this.cursos = await this.cursoService.receberNomes();
      console.log(this.cursos);
    } catch(error) {
      this.erroAoCarregar = true;
      console.log(`[ERROR] ${error}`);
    }
    this.cdr.detectChanges();
  }

  async cadastrarAluno(form: NgForm){
    try {
      const response = await this.alunoService.enviarAluno(this.aluno); 
    } catch (error) {
      this.erroAoCarregar = true;
      console.log(`[ERROR] ${error}`);
    }
    this.cdr.detectChanges();
    form.resetForm();
  }

}

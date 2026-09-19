import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlunoService } from '../../service/aluno-service/aluno-service';

@Component({
  imports: [FormsModule],
  selector: 'app-aba-cadastro',
  styleUrl: './aba-cadastro.css',
  templateUrl: './aba-cadastro.html',
})

export class AbaCadastro {

  aluno = {
    nome: '',
    bairro: '',
    data_nascimento: '',
    curso: '',
  };

  cursos = [
    {id:'JAVA', nome:'CURSO DE JAVA'},
    {id:'PYTHON', nome:'CURSO DE PYTHON'},
    {id:'PROG LOGICA', nome:'CURSO DE LÓGICA DE PROGRAMAÇÂO'},
    {id:'DB', nome:'CURSO DE BANCO DE DADOS'},
    {id:'ANGULAR', nome:'CURSO DE ANGULAR'},
    {id:'MUSICA', nome:'CURSO DE MUSICA'}
  ];

  constructor(private alunoService: AlunoService){}

  async cadastrarAluno(form: NgForm){
    const response = await this.alunoService.enviarAluno(this.aluno);
    
    console.log(response.status);

    //form.resetForm();
  }

}

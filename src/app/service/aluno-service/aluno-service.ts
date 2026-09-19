import { Component, Injectable } from '@angular/core';
import { Aluno } from '../../types/Aluno';

@Component({
  imports: [],
  selector: 'app-aluno-service',
  styleUrl: './aluno-service.css',
  templateUrl: './aluno-service.html',
})

@Injectable({
  providedIn:'root'
})

export class AlunoService {
  
  async enviarAluno(aluno : Aluno){
    const response = await fetch("http://localhost:8080/alunos", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(aluno)
    });

    if(!response.ok){
      throw new Error("ERRO AO CADASTRAR ALUNO");
    }

    return await response;
  }

}

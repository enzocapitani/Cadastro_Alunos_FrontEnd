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
      console.log(`[LOG] Status : ${response.status}`);
      throw new Error("ERRO AO CADASTRAR ALUNO");
    }

    console.log(`[LOG] Status : ${response.status}`);
    return await response;
  }

  async receberAlunos(): Promise<Aluno[]>{
    const response = await fetch("http://localhost:8080/alunos");

    if(!response.ok){
      console.log(`[LOG] Status : ${response.status}`);
      throw new Error("ERRO AO RECEBER ALUNOS");
    }
  
    return await response.json();
  }

}

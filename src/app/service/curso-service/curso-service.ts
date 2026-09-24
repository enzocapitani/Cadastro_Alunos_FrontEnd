import { Service } from '@angular/core';
import { Curso } from '../../types/Curso';

@Service()
export class CursoService {

    async receberCursos(): Promise<Curso[]>{
    const response = await fetch("http://localhost:8080/cursos");

    if(!response.ok){
      console.log(`[LOG] Status : ${response.status}`);
      throw new Error("ERRO AO RECEBER CURSOS");
    }
  
    return await response.json();
  }

  async receberNomes() {
    const response = await fetch("http://localhost:8080/cursos/nome");

    if(!response.ok){
      console.log(`[LOG] Status : ${response.status}`);
      throw new Error("ERRO AO RECEBER NOMES DOS CURSOS");
    }

    return await response.json();
  }

}

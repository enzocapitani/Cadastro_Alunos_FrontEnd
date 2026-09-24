import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Curso } from '../../types/Curso';
import { CursoService } from '../../service/curso-service/curso-service';

@Component({
  imports: [],
  selector: 'app-aba-cursos',
  styleUrl: './aba-cursos.css',
  templateUrl: './aba-cursos.html',
})
export class AbaCursos implements OnInit{

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService, private cdr: ChangeDetectorRef){};
  
  async ngOnInit(){
    const response = await this.cursoService.receberCursos();

    this.cursos = response;
    this.cdr.detectChanges();
  }

}

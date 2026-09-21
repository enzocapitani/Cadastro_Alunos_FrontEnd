import { Routes } from '@angular/router';
import { AbaCadastro } from './components/aba-cadastro/aba-cadastro';
import { AbaAlunos } from './components/aba-alunos/aba-alunos';
import { AbaCursos } from './components/aba-cursos/aba-cursos';

export const routes: Routes = [
    {
        path:"cadastro",
        component:AbaCadastro
    },
    {
        path:"alunos",
        component:AbaAlunos
    },
    {
        path:"cursos",
        component:AbaCursos
    }
];

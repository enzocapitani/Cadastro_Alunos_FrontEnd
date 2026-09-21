import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbaCursos } from './aba-cursos';

describe('AbaCursos', () => {
  let component: AbaCursos;
  let fixture: ComponentFixture<AbaCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaCursos],
    }).compileComponents();

    fixture = TestBed.createComponent(AbaCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

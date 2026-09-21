import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbaAlunos } from './aba-alunos';

describe('AbaAlunos', () => {
  let component: AbaAlunos;
  let fixture: ComponentFixture<AbaAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(AbaAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoService } from './aluno-service';

describe('AlunoService', () => {
  let component: AlunoService;
  let fixture: ComponentFixture<AlunoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoService],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

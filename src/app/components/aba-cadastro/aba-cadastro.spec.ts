import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbaCadastro } from './aba-cadastro';

describe('AbaCadastro', () => {
  let component: AbaCadastro;
  let fixture: ComponentFixture<AbaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(AbaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

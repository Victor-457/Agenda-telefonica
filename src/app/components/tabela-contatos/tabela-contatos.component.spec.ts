import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaContatosComponent } from './tabela-contatos.component';

describe('TabelaContatosComponent', () => {
  let component: TabelaContatosComponent;
  let fixture: ComponentFixture<TabelaContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

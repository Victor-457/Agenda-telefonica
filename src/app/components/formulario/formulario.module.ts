import { TabelaContatosComponent } from './../tabela-contatos/tabela-contatos.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/shared/material/material.module';

@NgModule({
  declarations: [
    FormularioComponent,
    TabelaContatosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormularioComponent
      }
    ]),
    NgxMaskModule.forRoot(),
    MaterialModule
  ]
})
export class FormularioModule { }

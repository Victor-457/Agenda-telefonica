import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { FormularioComponent } from './formulario.component';
import { MaterialModule } from './../../shared/material/material.module';
import { TabelaContatosComponent } from './../tabela-contatos/tabela-contatos.component';

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
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FormularioModule { }

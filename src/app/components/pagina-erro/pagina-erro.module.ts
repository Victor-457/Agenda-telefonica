import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../shared/material/material.module';
import { PaginaErroComponent } from './pagina-erro.component';

@NgModule({
  declarations: [
    PaginaErroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaginaErroComponent
      }
    ])
  ]
})
export class PaginaErroModule { }

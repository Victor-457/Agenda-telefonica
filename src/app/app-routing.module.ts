import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path:"",
    pathMatch: 'full',
    redirectTo:"pagina-inicial"
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./components/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components/pagina-erro/pagina-erro.module').then(m => m.PaginaErroModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

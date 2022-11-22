import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosDetailComponent } from './contactos-detail/contactos-detail.component';

const routes: Routes = [
  {
    //Ruta a Contactos
    path: 'Contactos',
    component: ContactosComponent,
  },

  {
    //Ruta a ContactosDetail
    path: 'ContactosDetail',
    component: ContactosDetailComponent,
  },

  {
    //Ruta vacia
    path: '**',
    component: ContactosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

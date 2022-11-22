import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ContactosDetailComponent } from './contactos-detail/contactos-detail.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { ReactiveFormsModule } from '@Angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactosComponent,
    ContactosDetailComponent,
    FormContactoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

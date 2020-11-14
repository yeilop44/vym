import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HombreComponent } from './components/hombre/hombre.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { AdministrarComponent } from './components/administrar/administrar.component';
import { ModalNuevoProductoComponent } from './components/shared/modals/modal-nuevo-producto/modal-nuevo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HombreComponent,
    MujerComponent,
    AdministrarComponent,
    ModalNuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalNuevoProductoComponent ]
})
export class AppModule { }

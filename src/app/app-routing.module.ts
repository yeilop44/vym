import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HombreComponent } from './components/hombre/hombre.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { AdministrarComponent } from './components/administrar/administrar.component';

const routes: Routes = [
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component:  MujerComponent },
  { path: 'administrar', component:  AdministrarComponent },

  { path: '**', component: HombreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

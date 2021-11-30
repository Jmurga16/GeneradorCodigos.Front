import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanjeComponent } from './components/canje/canje.component';
import { CodigosListComponent } from './components/codigos-list/codigos-list.component';
import { GeneracionComponent } from './components/generacion/generacion.component';

const routes: Routes = [  
  { path: "", component: GeneracionComponent, pathMatch:'full'},
  { path: "generacion", component: GeneracionComponent },  
  { path: "canje", component: CanjeComponent },
  { path: "codigos", component: CodigosListComponent },
  { path: "**", component: GeneracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

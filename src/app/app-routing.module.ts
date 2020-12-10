import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modulos/home/home.component';
import { ListaComponent } from './modulos/lista/lista.component';
import { TotalComponent } from './modulos/total/total.component';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent

  },

  {
    path: 'lista',
    component: ListaComponent

  },

  {

    path: 'total',
    component: TotalComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

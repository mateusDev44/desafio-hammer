import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './modulos/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './modulos/lista/lista.component';
import { TotalGastoBebidasComponent } from './components/total-gasto-bebidas/total-gasto-bebidas.component';
import { TotalGastoComidaComponent } from './components/total-gasto-comida/total-gasto-comida.component';
import { TotalComponent } from './modulos/total/total.component';
import { TotalArrecadadoComponent } from './components/total-arrecadado/total-arrecadado.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    ListaComponent,
    TotalArrecadadoComponent,
    TotalGastoBebidasComponent,
    TotalGastoComidaComponent,
    TotalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

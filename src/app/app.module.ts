import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
//ANGULAR MATERIAL COMPONENTS 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// OWN COMPONENTS
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Services } from './services';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [ // aqui se declaran todos los componentes que quieras inicializar
    AppComponent, BuscadorComponent, DashboardComponent,
  ],
  imports: [ // modules that are required for the project
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Services],// services as http client para hacer fetch y ese tipo de cosas
  bootstrap: [AppComponent]
})
export class AppModule { }

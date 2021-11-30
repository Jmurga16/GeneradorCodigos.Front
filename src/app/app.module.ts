import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GeneracionComponent } from './components/generacion/generacion.component';
import { CanjeComponent } from './components/canje/canje.component';
import { CodigosListComponent } from './components/codigos-list/codigos-list.component';

//Material
import { AppMaterialModule } from './modules/app-material.module';


@NgModule({
  declarations: [
    AppComponent,    
    NavigationComponent,
    GeneracionComponent,
    CanjeComponent,
    CodigosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

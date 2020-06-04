import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { ChatComponent } from './chat/chat.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { CasaComponent } from './casa/casa.component';
import { FormResidenciaComponent } from './form-residencia/form-residencia.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { TraductorComponent } from './traductor/traductor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipsComponent,
    ChatComponent,
    AlojamientoComponent,
    CasaComponent,
    FormResidenciaComponent,
    FormLoginComponent,
    TraductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgmMapComponent } from './agm-map/agm-map.component';

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
    TraductorComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTVA871cCbqVAtJB17E_nLYuI2HLvFLiw'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

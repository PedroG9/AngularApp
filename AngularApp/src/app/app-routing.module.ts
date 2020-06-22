import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { ChatComponent } from './chat/chat.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { TraductorComponent } from './traductor/traductor.component';
import { FormResidenciaComponent } from './form-residencia/form-residencia.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MensajesComponent } from './mensajes/mensajes.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'alojamiento', component: AlojamientoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'traductor', component: TraductorComponent },
  { path: 'login', component: FormLoginComponent },
  { path: 'añadirresidencia', component: FormResidenciaComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

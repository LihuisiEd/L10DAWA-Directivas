import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'respuesta/:nombre/:email', component: RespuestaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    FormularioComponent,
    RespuestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

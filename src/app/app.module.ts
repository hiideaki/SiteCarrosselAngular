import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { HistoriaComponent } from './historia/historia.component';
import { TimeComponent } from './time/time.component';
import { ContatoComponent } from './contato/contato.component';
import { EventosComponent } from './eventos/eventos.component';
import { NotfoundComponent } from './notfound/notfound.component';

import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    HistoriaComponent,
    TimeComponent,
    ContatoComponent,
    EventosComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

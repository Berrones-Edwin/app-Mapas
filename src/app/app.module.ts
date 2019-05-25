import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Angular
import { MaterialModule } from "./material.module";

// Components
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa-editar/mapa-editar.component';

// Google Maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  // Decirle a Angular que el componente se va a inyectar
  //se va a usar como un modal
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'API_KEY'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

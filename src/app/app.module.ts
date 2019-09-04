import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    BorrarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

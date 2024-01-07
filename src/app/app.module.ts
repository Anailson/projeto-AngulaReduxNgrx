import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MainComponent } from './main/main.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Adicione essas linhas para importar os módulos do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    MainComponent,
    CadastroUsuariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

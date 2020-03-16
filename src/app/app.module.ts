import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluadorCreateeComponent } from './components/evaluador-createe/evaluador-createe.component';
import { EvaluadorEditComponent } from './components/evaluador-edit/evaluador-edit.component';
import { EvaluadorListComponent } from './components/evaluador-list/evaluador-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EvaluadorCreateeComponent,
    EvaluadorEditComponent,
    EvaluadorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

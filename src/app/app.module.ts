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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

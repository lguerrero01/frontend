import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluadorCreateeComponent } from './components/evaluador-createe/evaluador-createe.component';
import { EvaluadorListComponent } from './components/evaluador-list/evaluador-list.component';
import { EvaluadorEditComponent } from './components/evaluador-edit/evaluador-edit.component';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '', pathMatch: 'full', redirectTo: 'createe-evaluador' },
  { path: 'evaluador-createe', component: EvaluadorCreateeComponent },
  { path: 'evaluador-edit/:id', component: EvaluadorEditComponent },
  { path: 'evaluador-list', component: EvaluadorListComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
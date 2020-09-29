import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RagistrationComponent } from './ragistration/ragistration.component';

const routes: Routes = [
  { path:'' , redirectTo : '/RagistrationComponent' , pathMatch: 'full'},
  { path: 'login', component :LogInComponent},
  { path: 'ragistration', component :RagistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

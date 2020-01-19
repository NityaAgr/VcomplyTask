import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrequencyComponent } from './frequency/frequency.component';

const routes: Routes = [{ path: 'frequency', component: FrequencyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

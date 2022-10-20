import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  {path: '', component: BackgroundComponent, data: {breadcrumb: 'Home'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

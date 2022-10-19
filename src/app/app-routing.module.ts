import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  {
    path: '',
    title: 'First component',
    component: BackgroundComponent, // this is the component with the <router-outlet> in the template
    // children: [
    //   {
    //     path: 'child-a', // child route path
    //     component: ChildAComponent, // child route component that the router renders
    //   },
    //   {
    //     path: 'child-b',
    //     component: ChildBComponent, // another child route component that the router renders
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

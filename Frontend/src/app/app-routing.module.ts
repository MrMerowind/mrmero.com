import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './about/github/github.component';
import { MeComponent } from './about/me/me.component';

const routes: Routes = [{
  path: 'me',
  component: MeComponent
},
{
  path: 'github',
  component: GithubComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

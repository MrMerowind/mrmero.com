import { Component, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { GithubComponent } from './about/github/github.component';
import { MeComponent } from './about/me/me.component';

const routes: Routes = [{
  path: 'me',
  component: MeComponent
},
{ path: 'github', component: GithubComponent,
    pathMatch: 'prefix',
    resolve: { url: 'externalUrlResolver' },
    data: { externalUrl: 'https://github.com/MrMerowind'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: 'externalUrlResolver',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      window.location.href = `${route.data['externalUrl']}`;
    }
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }

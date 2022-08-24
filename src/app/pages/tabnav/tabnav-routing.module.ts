import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [ {
  path: 'tabs',
  component: TabnavPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'forms',
      loadChildren: () => import('../forms/forms.module').then( m => m.FormsPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: 'data',
      loadChildren: () => import('../data/data.module').then( m => m.DataPageModule)
    },
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    },
  ]
},
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}

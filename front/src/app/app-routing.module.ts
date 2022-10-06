import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ideas',
    loadChildren: () => import('./ideas/ideas.module').then( m => m.IdeasPageModule)
  },
 
  {
    path: 'nav',
    loadChildren: () => import('./shared/nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./shared/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./idea/idea.module').then( m => m.IdeaPageModule)
  },
  {
    path: 'idea-create',
    loadChildren: () => import('./idea-create/idea-create.module').then( m => m.IdeaCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

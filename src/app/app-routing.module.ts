import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then((i)=> i.IndexPageModule)
  },
  {
    path: 'clubes',
    loadChildren: () => import('./clubes/clubes.module').then( (m) => m.ClubesPageModule) //En construccion
  },
  {
    path: 'posiciones',
    loadChildren: () => import('./posiciones/posiciones.module').then( (m) => m.PosicionesPageModule) //Lista modo beta
  },
  {
    path: 'formulario-club',
    loadChildren: () => import('./formulario-club/formulario-club.module').then( (m) => m.FormularioClubPageModule)
  },
  {
    path: 'club',
    loadChildren: () => import('./club/club.module').then( m => m.ClubPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'matkul',
    loadChildren: () => import('./matkul/matkul.module').then( m => m.MatkulPageModule)
  },
  {
    path: 'jadwal',
    loadChildren: () => import('./jadwal/jadwal.module').then( m => m.JadwalPageModule)
  },
  {
    path: 'nilai',
    loadChildren: () => import('./nilai/nilai.module').then( m => m.NilaiPageModule)
  },
  {
    path: 'krs',
    loadChildren: () => import('./krs/krs.module').then( m => m.KrsPageModule)
  },
  {
    path: 'keuangan',
    loadChildren: () => import('./keuangan/keuangan.module').then( m => m.KeuanganPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

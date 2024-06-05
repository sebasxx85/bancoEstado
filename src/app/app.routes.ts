import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { OnBoardComponent } from './componentes/on-board/on-board.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'on-board', component: OnBoardComponent },
 // { path: 'on-board', loadChildren: () => import('./componentes/on-board/on-board.module').then(m => m.OnBoardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
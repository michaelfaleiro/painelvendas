import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { OrcamentoDetailsComponent } from './pages/orcamento-details/orcamento-details.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orcamentos', component: OrcamentoComponent },
  { path: 'orcamentos/:id', component: OrcamentoDetailsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

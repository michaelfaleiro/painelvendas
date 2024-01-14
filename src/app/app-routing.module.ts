import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { OrcamentoDetailsComponent } from './pages/orcamento-details/orcamento-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orcamentos', component: OrcamentoComponent },
  { path: 'orcamentos/:id', component: OrcamentoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

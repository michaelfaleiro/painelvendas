import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { HttpClientModule } from '@angular/common/http';
import { OrcamentoDetailsComponent } from './pages/orcamento-details/orcamento-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoOrcamentoComponent } from './components/novo-orcamento/novo-orcamento.component';
import { ModalConfirmacaoComponent } from './components/modal-confirmacao/modal-confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrcamentoComponent,
    OrcamentoDetailsComponent,
    SidebarComponent,
    LoadingComponent,
    NovoOrcamentoComponent,
    ModalConfirmacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';
import { TOrcamento } from '../../types/TOrcamento';
import { OrcamentoService } from '../../services/orcamento/orcamento.service';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrl: './orcamento.component.css',
})
export class OrcamentoComponent {
  orcamentos$ = new Observable<TOrcamento[]>();
  showModalNovoProduto: boolean = false;
  showModalConfirm: boolean = false;

  constructor(
    private orcamentoService: OrcamentoService,
    private cdr: ChangeDetectorRef
  ) {
    this.getOrcamentos();
  }

  getOrcamentos() {
    this.orcamentos$ = this.orcamentoService.getAll();
    this.orcamentos$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  removeOrcamento(id: string) {
    console.log('remove');
    this.orcamentoService
      .removeOrcamento(id)
      .subscribe(() => this.getOrcamentos());
  }

  showModal() {
    this.showModalNovoProduto = !this.showModalNovoProduto;
  }

  showModalConfirmacao(): void {
    this.showModalConfirm = !this.showModalConfirm;
  }
}

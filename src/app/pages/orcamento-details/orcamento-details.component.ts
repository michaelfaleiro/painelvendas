import { Observable } from 'rxjs';
import { OrcamentoService } from '../../services/orcamento/orcamento.service';
import { TOrcamento } from './../../types/TOrcamento';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orcamento-details',
  templateUrl: './orcamento-details.component.html',
  styleUrl: './orcamento-details.component.css',
})
export class OrcamentoDetailsComponent {
  orcamento$ = new Observable<TOrcamento>();

  constructor(
    private orcamentoService: OrcamentoService,
    private route: ActivatedRoute
  ) {
    this.getOrcamento();
  }

  getOrcamento() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orcamento$ = this.orcamentoService.getOrcamento(id!);
  }
}

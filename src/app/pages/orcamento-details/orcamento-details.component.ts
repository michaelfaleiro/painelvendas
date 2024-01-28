import { Observable } from 'rxjs';
import { OrcamentoService } from '../../services/orcamento/orcamento.service';
import { TOrcamento } from './../../types/TOrcamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orcamento-details',
  templateUrl: './orcamento-details.component.html',
  styleUrl: './orcamento-details.component.css',
})
export class OrcamentoDetailsComponent implements OnInit {
  orcamento$ = new Observable<TOrcamento>();

  constructor(
    private orcamentoService: OrcamentoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrcamento();
  }

  getOrcamento() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orcamento$ = this.orcamentoService.getOrcamento(id!);
  }
}

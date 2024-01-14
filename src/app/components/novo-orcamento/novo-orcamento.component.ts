import { TNovoOrcamento } from './../../types/TOrcamento';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OrcamentoService } from '../../services/orcamento/orcamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-orcamento',
  templateUrl: './novo-orcamento.component.html',
  styleUrl: './novo-orcamento.component.css',
})
export class NovoOrcamentoComponent implements OnInit {
  formulario!: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() carregarDados = new EventEmitter<void>();

  constructor(
    private orcamentoService: OrcamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cliente: ['', Validators.compose([Validators.required])],
      carro: ['', Validators.compose([Validators.required])],
      telefone: ['', Validators.compose([Validators.required])],
      chassis: [''],
      placa: ['', Validators.compose([Validators.maxLength(7)])],
    });
  }

  fecharModal(): void {
    this.closeModal.emit();
  }

  atualizarDados(): void {
    console.log('filho');
    this.carregarDados.emit();
  }

  novoOrcamento() {
    if (this.formulario.valid) {
      this.orcamentoService.postOrcamento(this.formulario.value).subscribe(
        () => this.router.navigate(['/orcamentos']),
        (err) => console.log(err)
      );
      this.atualizarDados();
      this.fecharModal();
    }
  }
}

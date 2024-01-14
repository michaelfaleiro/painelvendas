import { Injectable } from '@angular/core';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { TNovoOrcamento, TOrcamento } from '../../types/TOrcamento';
import { environment } from '../../../environments/environment.development';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class OrcamentoService {
  private apiUrl = `${environment.api}/orcamentos`;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getAll(): Observable<TOrcamento[]> {
    this.loadingService.show();
    return this.http.get<{ data: TOrcamento[] }>(`${this.apiUrl}`).pipe(
      map((response: any) => response.data),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }

  getOrcamento(id: string): Observable<TOrcamento> {
    this.loadingService.show();
    return this.http.get<{ data: TOrcamento }>(`${this.apiUrl}/${id}`).pipe(
      map((response: any) => response.data),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }

  postOrcamento(orcamento: TNovoOrcamento): Observable<TNovoOrcamento> {
    return this.http.post<TNovoOrcamento>(this.apiUrl, orcamento);
  }

  removeOrcamento(id: string): Observable<TOrcamento> {
    return this.http.delete<TOrcamento>(`${this.apiUrl}/${id}`);
  }
}

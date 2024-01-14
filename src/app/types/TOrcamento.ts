import { TProduto } from './TProduto';

export type TOrcamento = {
  id: string;
  cliente: string;
  telefone: string;
  carro: string;
  placa?: string;
  chassis?: string;
  total: number;
  produtos?: TProduto[];
  createdAt: string;
  updatedAt: string;
};

export type TNovoOrcamento = Omit<
  TOrcamento,
  'id' | 'total' | 'createdAt' | 'updatedAt' | 'produtos'
>;

import { Empresa as DbEmpresa } from '@app/models/backend/empresa';

export type EmpresaCreateRequest = Omit<DbEmpresa, 'id'>;

export type EmpresaUpdateRequest = DbEmpresa;

export interface EmpresaForm {
  nombre: string | null;
  nif: string | null;
  logo: string | null;
  calle: string | null;
  numero: number | null;
  codigoPostal: string | null;
  ciudad: string | null;
  provincia: string | null;
  pais: string | null;
  telefono: string | null;
  email: string | null;
}




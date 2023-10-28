import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface JobPositionInterface {
  id?: string;
  title: string;
  description?: string;
  salary: number;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface JobPositionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  employee_id?: string;
}

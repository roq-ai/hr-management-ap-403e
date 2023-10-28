import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface LeaveRequestInterface {
  id?: string;
  start_date: any;
  end_date: any;
  reason?: string;
  status: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface LeaveRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  reason?: string;
  status?: string;
  employee_id?: string;
}

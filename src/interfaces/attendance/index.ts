import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  check_in: any;
  check_out?: any;
  total_hours?: number;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}

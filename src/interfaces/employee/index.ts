import { AttendanceInterface } from 'interfaces/attendance';
import { JobPositionInterface } from 'interfaces/job-position';
import { LeaveRequestInterface } from 'interfaces/leave-request';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  job_position?: JobPositionInterface[];
  leave_request?: LeaveRequestInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    attendance?: number;
    job_position?: number;
    leave_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  user_id?: string;
  organization_id?: string;
}

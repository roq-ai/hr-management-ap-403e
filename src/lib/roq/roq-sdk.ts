/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl, RoqPlatformClient, BrowserCookieAuth } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type { Prisma, attendance, employee, job_position, leave_request, organization, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface AttendanceSDK {
  create: <T extends Prisma.attendanceCreateArgs, R extends CheckSelect<T, attendance, Prisma.attendanceGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.attendanceCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.attendanceCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.attendanceCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.attendanceUpdateArgs, R extends Prisma.attendanceGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.attendanceUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.attendanceUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.attendanceUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.attendanceUpsertArgs, R extends Prisma.attendanceGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.attendanceUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.attendanceDeleteArgs, R extends Prisma.attendanceGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.attendanceDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.attendanceDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.attendanceDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.attendanceFindManyArgs,
    R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.attendanceCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.attendanceCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.attendanceFindManyArgs,
    R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.attendanceFindFirstArgs,
    R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.attendanceFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface EmployeeSDK {
  create: <T extends Prisma.employeeCreateArgs, R extends CheckSelect<T, employee, Prisma.employeeGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.employeeCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.employeeCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.employeeUpdateArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.employeeUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.employeeUpsertArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.employeeDeleteArgs, R extends Prisma.employeeGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.employeeDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.employeeDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.employeeDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.employeeFindManyArgs, R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.employeeCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.employeeCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.employeeFindManyArgs,
    R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.employeeFindFirstArgs, R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.employeeFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Job_positionSDK {
  create: <
    T extends Prisma.job_positionCreateArgs,
    R extends CheckSelect<T, job_position, Prisma.job_positionGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.job_positionCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.job_positionCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_positionCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.job_positionUpdateArgs, R extends Prisma.job_positionGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_positionUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.job_positionUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_positionUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.job_positionUpsertArgs, R extends Prisma.job_positionGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_positionUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.job_positionDeleteArgs, R extends Prisma.job_positionGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_positionDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.job_positionDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_positionDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.job_positionFindManyArgs,
    R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.job_positionCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.job_positionCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.job_positionFindManyArgs,
    R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.job_positionFindFirstArgs,
    R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.job_positionFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Leave_requestSDK {
  create: <
    T extends Prisma.leave_requestCreateArgs,
    R extends CheckSelect<T, leave_request, Prisma.leave_requestGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.leave_requestCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.leave_requestCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.leave_requestCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.leave_requestUpdateArgs, R extends Prisma.leave_requestGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.leave_requestUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.leave_requestUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.leave_requestUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.leave_requestUpsertArgs, R extends Prisma.leave_requestGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.leave_requestUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.leave_requestDeleteArgs, R extends Prisma.leave_requestGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.leave_requestDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.leave_requestDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.leave_requestDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.leave_requestFindManyArgs,
    R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.leave_requestCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.leave_requestCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.leave_requestFindManyArgs,
    R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.leave_requestFindFirstArgs,
    R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.leave_requestFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface OrganizationSDK {
  create: <
    T extends Prisma.organizationCreateArgs,
    R extends CheckSelect<T, organization, Prisma.organizationGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.organizationCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.organizationCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.organizationCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.organizationUpdateArgs, R extends Prisma.organizationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.organizationUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.organizationUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.organizationUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.organizationUpsertArgs, R extends Prisma.organizationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.organizationUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.organizationDeleteArgs, R extends Prisma.organizationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.organizationDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.organizationDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.organizationDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.organizationFindManyArgs,
    R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.organizationCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.organizationCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.organizationFindManyArgs,
    R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.organizationFindFirstArgs,
    R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.organizationFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient extends RoqPlatformClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public attendance: AttendanceSDK;

  public employee: EmployeeSDK;

  public job_position: Job_positionSDK;

  public leave_request: Leave_requestSDK;

  public organization: OrganizationSDK;

  public user: UserSDK;

  constructor(backendHost: string, platformHost: string, baseOptions: RequestOptions = {}) {
    super({
      host: platformHost,
      auth: new BrowserCookieAuth(),
    });
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.attendance = {
      create: async function createAttendance<
        T extends Prisma.attendanceCreateArgs,
        R extends CheckSelect<T, attendance, Prisma.attendanceGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/attendance/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyAttendance<
        T extends Prisma.attendanceCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/attendance/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateAttendance<
        T extends Prisma.attendanceUpdateArgs,
        R extends Prisma.attendanceGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/attendance/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyAttendance<
        T extends Prisma.attendanceUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/attendance/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertAttendance<
        T extends Prisma.attendanceUpsertArgs,
        R extends Prisma.attendanceGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/attendance/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteAttendance<
        T extends Prisma.attendanceDeleteArgs,
        R extends Prisma.attendanceGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/attendance/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyAttendance<
        T extends Prisma.attendanceDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.attendanceDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/attendance/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyAttendance<
        T extends Prisma.attendanceFindManyArgs,
        R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/attendance/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countAttendance<T extends Prisma.attendanceCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.attendanceCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/attendance/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountAttendance<
        T extends Prisma.attendanceFindManyArgs,
        R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.attendance.findMany(args, options),
          ctx.attendance.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstAttendance<
        T extends Prisma.attendanceFindFirstArgs,
        R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.attendanceFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/attendance/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.employee = {
      create: async function createEmployee<
        T extends Prisma.employeeCreateArgs,
        R extends CheckSelect<T, employee, Prisma.employeeGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyEmployee<
        T extends Prisma.employeeCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/employee/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateEmployee<
        T extends Prisma.employeeUpdateArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyEmployee<
        T extends Prisma.employeeUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/employee/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertEmployee<
        T extends Prisma.employeeUpsertArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/employee/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteEmployee<
        T extends Prisma.employeeDeleteArgs,
        R extends Prisma.employeeGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.employeeDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyEmployee<
        T extends Prisma.employeeDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.employeeDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyEmployee<
        T extends Prisma.employeeFindManyArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countEmployee<T extends Prisma.employeeCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.employeeCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/employee/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountEmployee<
        T extends Prisma.employeeFindManyArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.employee.findMany(args, options),
          ctx.employee.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstEmployee<
        T extends Prisma.employeeFindFirstArgs,
        R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.employeeFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/employee/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.job_position = {
      create: async function createJob_position<
        T extends Prisma.job_positionCreateArgs,
        R extends CheckSelect<T, job_position, Prisma.job_positionGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_position/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyJob_position<
        T extends Prisma.job_positionCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_position/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateJob_position<
        T extends Prisma.job_positionUpdateArgs,
        R extends Prisma.job_positionGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_position/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyJob_position<
        T extends Prisma.job_positionUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_position/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertJob_position<
        T extends Prisma.job_positionUpsertArgs,
        R extends Prisma.job_positionGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_position/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteJob_position<
        T extends Prisma.job_positionDeleteArgs,
        R extends Prisma.job_positionGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_position/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyJob_position<
        T extends Prisma.job_positionDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_positionDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_position/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyJob_position<
        T extends Prisma.job_positionFindManyArgs,
        R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_position/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countJob_position<T extends Prisma.job_positionCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.job_positionCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/job_position/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountJob_position<
        T extends Prisma.job_positionFindManyArgs,
        R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.job_position.findMany(args, options),
          ctx.job_position.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstJob_position<
        T extends Prisma.job_positionFindFirstArgs,
        R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.job_positionFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_position/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.leave_request = {
      create: async function createLeave_request<
        T extends Prisma.leave_requestCreateArgs,
        R extends CheckSelect<T, leave_request, Prisma.leave_requestGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/leave_request/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyLeave_request<
        T extends Prisma.leave_requestCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/leave_request/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateLeave_request<
        T extends Prisma.leave_requestUpdateArgs,
        R extends Prisma.leave_requestGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/leave_request/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyLeave_request<
        T extends Prisma.leave_requestUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/leave_request/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertLeave_request<
        T extends Prisma.leave_requestUpsertArgs,
        R extends Prisma.leave_requestGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/leave_request/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteLeave_request<
        T extends Prisma.leave_requestDeleteArgs,
        R extends Prisma.leave_requestGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/leave_request/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyLeave_request<
        T extends Prisma.leave_requestDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.leave_requestDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/leave_request/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyLeave_request<
        T extends Prisma.leave_requestFindManyArgs,
        R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/leave_request/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countLeave_request<T extends Prisma.leave_requestCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.leave_requestCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/leave_request/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountLeave_request<
        T extends Prisma.leave_requestFindManyArgs,
        R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.leave_request.findMany(args, options),
          ctx.leave_request.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstLeave_request<
        T extends Prisma.leave_requestFindFirstArgs,
        R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.leave_requestFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/leave_request/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.organization = {
      create: async function createOrganization<
        T extends Prisma.organizationCreateArgs,
        R extends CheckSelect<T, organization, Prisma.organizationGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.organizationCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/organization/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyOrganization<
        T extends Prisma.organizationCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.organizationCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/organization/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateOrganization<
        T extends Prisma.organizationUpdateArgs,
        R extends Prisma.organizationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.organizationUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/organization/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyOrganization<
        T extends Prisma.organizationUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.organizationUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/organization/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertOrganization<
        T extends Prisma.organizationUpsertArgs,
        R extends Prisma.organizationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.organizationUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/organization/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteOrganization<
        T extends Prisma.organizationDeleteArgs,
        R extends Prisma.organizationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.organizationDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/organization/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyOrganization<
        T extends Prisma.organizationDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.organizationDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/organization/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyOrganization<
        T extends Prisma.organizationFindManyArgs,
        R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/organization/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countOrganization<T extends Prisma.organizationCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.organizationCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/organization/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountOrganization<
        T extends Prisma.organizationFindManyArgs,
        R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.organization.findMany(args, options),
          ctx.organization.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstOrganization<
        T extends Prisma.organizationFindFirstArgs,
        R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.organizationFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/organization/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}

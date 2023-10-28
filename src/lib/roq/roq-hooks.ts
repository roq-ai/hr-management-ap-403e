/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';
import {
  FileCategoriesQuery,
  FileCategoriesQueryVariables,
  FileCategoryContentGroupQuery,
  FileCategoryContentGroupQueryVariables,
  FileCategoryContentGroupsQuery,
  FileCategoryContentGroupsQueryVariables,
  FileCategoryContentTypesQuery,
  FileCategoryContentTypesQueryVariables,
  FileCategoryQuery,
  FileCategoryQueryVariables,
  FileQuery,
  FileQueryVariables,
  FilesQuery,
  FilesQueryVariables,
  RoleQuery,
  RoleQueryVariables,
  RolesQuery,
  RolesQueryVariables,
  TenantQuery,
  TenantQueryVariables,
  UserInviteQuery,
  UserInviteQueryVariables,
  UserInvitesQuery,
  UserInvitesQueryVariables,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '@roq/client';

export function useAttendanceFindMany<
  T extends Prisma.attendanceFindManyArgs,
  R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceCount<T extends Prisma.attendanceCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceFindManyWithCount<
  T extends Prisma.attendanceFindManyArgs,
  R extends { data: GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceFindFirst<
  T extends Prisma.attendanceFindFirstArgs,
  R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmployeeFindMany<
  T extends Prisma.employeeFindManyArgs,
  R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmployeeFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.employee.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmployeeCount<T extends Prisma.employeeCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.employeeCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmployeeCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.employee.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmployeeFindManyWithCount<
  T extends Prisma.employeeFindManyArgs,
  R extends { data: GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.employeeFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmployeeFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.employee.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmployeeFindFirst<
  T extends Prisma.employeeFindFirstArgs,
  R extends GetFindResult<Prisma.$employeePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.employeeFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmployeeFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.employee.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useJobPositionFindMany<
  T extends Prisma.job_positionFindManyArgs,
  R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useJobPositionFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.job_position.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useJobPositionCount<T extends Prisma.job_positionCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.job_positionCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useJobPositionCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.job_position.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useJobPositionFindManyWithCount<
  T extends Prisma.job_positionFindManyArgs,
  R extends { data: GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.job_positionFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useJobPositionFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.job_position.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useJobPositionFindFirst<
  T extends Prisma.job_positionFindFirstArgs,
  R extends GetFindResult<Prisma.$job_positionPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.job_positionFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useJobPositionFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.job_position.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLeaveRequestFindMany<
  T extends Prisma.leave_requestFindManyArgs,
  R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLeaveRequestFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.leave_request.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLeaveRequestCount<T extends Prisma.leave_requestCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.leave_requestCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLeaveRequestCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.leave_request.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLeaveRequestFindManyWithCount<
  T extends Prisma.leave_requestFindManyArgs,
  R extends { data: GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.leave_requestFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLeaveRequestFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.leave_request.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLeaveRequestFindFirst<
  T extends Prisma.leave_requestFindFirstArgs,
  R extends GetFindResult<Prisma.$leave_requestPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.leave_requestFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLeaveRequestFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.leave_request.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindMany<
  T extends Prisma.organizationFindManyArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationCount<T extends Prisma.organizationCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.organizationCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindManyWithCount<
  T extends Prisma.organizationFindManyArgs,
  R extends { data: GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindFirst<
  T extends Prisma.organizationFindFirstArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfile(
  args?: UserProfileQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRoles(args?: RolesQueryVariables, swrOptions?: SWRRequestOptions<RolesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRole(args?: RoleQueryVariables, swrOptions?: SWRRequestOptions<RoleQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvite(
  args?: UserInviteQueryVariables,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFiles(args?: FilesQueryVariables, swrOptions?: SWRRequestOptions<FilesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFile(args?: FileQueryVariables, swrOptions?: SWRRequestOptions<FileQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroup(
  args?: FileCategoryContentGroupQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategory(
  args?: FileCategoryQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformTenant(args?: TenantQueryVariables, swrOptions?: SWRRequestOptions<TenantQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformTenant', args || {}]);
  return useSWR<TenantQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.tenant(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

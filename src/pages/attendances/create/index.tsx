import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { attendanceValidationSchema } from 'validationSchema/attendances';
import { EmployeeInterface } from 'interfaces/employee';
import { AttendanceInterface } from 'interfaces/attendance';

function AttendanceCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: AttendanceInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.attendance.create({ data: values as RoqTypes.attendance });
      resetForm();
      router.push('/attendances');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AttendanceInterface>({
    initialValues: {
      check_in: new Date(new Date().toDateString()),
      check_out: new Date(new Date().toDateString()),
      total_hours: 0,
      employee_id: (router.query.employee_id as string) ?? null,
    },
    validationSchema: attendanceValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Attendances',
              link: '/attendances',
            },
            {
              label: 'Create Attendance',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Attendance
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="check_in" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Check In
            </FormLabel>
            <DatePicker
              selected={formik.values?.check_in ? new Date(formik.values?.check_in) : null}
              onChange={(value: Date) => formik.setFieldValue('check_in', value)}
            />
          </FormControl>
          <FormControl id="check_out" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Check Out
            </FormLabel>
            <DatePicker
              selected={formik.values?.check_out ? new Date(formik.values?.check_out) : null}
              onChange={(value: Date) => formik.setFieldValue('check_out', value)}
            />
          </FormControl>

          <NumberInput
            label="Total Hours"
            formControlProps={{
              id: 'total_hours',
              isInvalid: !!formik.errors?.total_hours,
            }}
            name="total_hours"
            error={formik.errors?.total_hours}
            value={formik.values?.total_hours}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_hours', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<EmployeeInterface>
            formik={formik}
            name={'employee_id'}
            label={'Select Employee'}
            placeholder={'Select Employee'}
            fetcher={() => roqClient.employee.findManyWithCount({})}
            labelField={'first_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/attendances')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'attendance',
    operation: AccessOperationEnum.CREATE,
  }),
)(AttendanceCreatePage);

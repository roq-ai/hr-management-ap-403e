import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  check_in: yup.date().required(),
  check_out: yup.date().nullable(),
  total_hours: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});

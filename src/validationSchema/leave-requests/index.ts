import * as yup from 'yup';

export const leaveRequestValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  reason: yup.string().nullable(),
  status: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});

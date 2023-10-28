import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  zip_code: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

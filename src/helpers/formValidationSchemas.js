import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email field is required'),
  password: Yup.string()
    .min(6, 'Min 6 length')
    .required('Password field is required'),
  domainType: Yup.string().required('Domain is required'),
});

export const recordValidation = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
  description: Yup.string().required('Description field is required'),
  start_date: Yup.string().required('This field is required'),
  end_date: Yup.string().required('This field is required'),
  //operation_type: Yup.number().required('Operation type is required'),
});

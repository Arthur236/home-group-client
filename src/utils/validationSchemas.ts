import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string().min(6).max(255).required('Password is required')
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  firstName: Yup.string().min(2).max(255).required('First name is required'),
  lastName: Yup.string().min(2).max(255).required('Last name is required'),
  password: Yup.string().min(6).max(255).required('Password is required'),
  password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

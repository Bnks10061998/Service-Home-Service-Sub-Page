import * as Yup from 'yup';

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const phoneRegex = /^[0-9]{10,15}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(strictEmailRegex, 'Please enter a valid email address')
    .required('This field is required'),

  password: Yup.string()
    .min(8, 'Minimum 8 characters required')
    .matches(
      passwordRules,
       'Must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'
    )
    .required('This field is required'),
});

  
  export const otpSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^[0-9]{4,6}$/, 'Enter a valid 4-6 digit OTP')
      .required('OTP is required'),
  });

  
  export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Minimum 3 characters required')
      .required('This field is required'),
      
    lastName: Yup.string()
    .min(1, 'Minimum 1 characters required')
      .required('This field is required'),
  
    email: Yup.string()
      .trim()
      .matches(strictEmailRegex, 'Please enter a valid email address')
      .required('This field is required'),
  
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
      .required('This field is required'),
  
    password: Yup.string()
      .min(8, 'Minimum 8 characters required')
      .matches(
        passwordRules,
        'Must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'
      )
      .required('This field is required'),
  
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('This field is required'),
  });


  export const forgot_password = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(strictEmailRegex, 'Please enter a valid email address')
      .required('This field is required'),
  });

  
  export const reset_password = Yup.object().shape({
    password: Yup.string()
    .min(8, 'Minimum 8 characters required')
    .matches(
      passwordRules,
      'Must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'
    )
    .required('This field is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('This field is required'),
  });
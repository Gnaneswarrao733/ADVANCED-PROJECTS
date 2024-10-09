
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required').matches(/^[0-9]+$/, 'Must be only digits'),
    cardNumber: Yup.string().required('Required').matches(/^[0-9]{16}$/, 'Must be 16 digits'),
    cardExpiry: Yup.string().required('Required').matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Invalid expiry date'),
    cardCVC: Yup.string().required('Required').matches(/^[0-9]{3}$/, 'Must be 3 digits')
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
    
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Phone:</label>
            <Field name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <div>
            <label>Address:</label>
            <Field name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <label>City:</label>
            <Field name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <div>
            <label>Postal Code:</label>
            <Field name="postalCode" />
            <ErrorMessage name="postalCode" component="div" />
          </div>
          <div>
            <label>Card Number:</label>
            <Field name="cardNumber" />
            <ErrorMessage name="cardNumber" component="div" />
          </div>
          <div>
            <label>Card Expiry:</label>
            <Field name="cardExpiry" placeholder="MM/YY" />
            <ErrorMessage name="cardExpiry" component="div" />
          </div>
          <div>
            <label>Card CVC:</label>
            <Field name="cardCVC" />
            <ErrorMessage name="cardCVC" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;

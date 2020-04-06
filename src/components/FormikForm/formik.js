import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import formStyles from "./formStyles.module.css"

 const FormikForm = () => {
    return <Formik
    initialValues={{
        firstName: '',
        lastName: '',
        email: '',  
        password: '',
        confirmPassword: ''
    }}
    validationSchema={Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    })}
    onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 1500);
    }}>
    {({ errors, touched, handleSubmit, isSubmitting}) => (
        <Form className={formStyles.form} onSubmit={handleSubmit}> 
            <div className={formStyles.formGroup}>
                <label className={`${formStyles.label} ${errors.firstName && touched.firstName && formStyles.errorLabel}`} htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" className={`${formStyles.formInput} ${errors.firstName && touched.firstName && formStyles.errorInput}`} />
                <ErrorMessage name="firstName" component="div" className={formStyles.inputErrorMessage} />
            </div>
            <div className={formStyles.formGroup}>
                <label className={`${formStyles.label} ${errors.lastName && touched.lastName && formStyles.errorLabel}`} htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className={`${formStyles.formInput} ${errors.lastName && touched.lastName && formStyles.errorInput}`} />
                <ErrorMessage name="lastName" component="div" className={formStyles.inputErrorMessage} />
            </div>
            <div className={formStyles.formGroup}>
                <label className={`${formStyles.label} ${errors.email && touched.email && formStyles.errorLabel}`} htmlFor="email">Email</label>
                <Field name="email" type="text" className={`${formStyles.formInput} ${errors.email && touched.email && formStyles.errorInput}`} />
                <ErrorMessage name="email" component="div" className={formStyles.inputErrorMessage} />
            </div>
            <div className={formStyles.formGroup}>
                <label className={`${formStyles.label} ${errors.password && touched.password && formStyles.errorLabel}`} htmlFor="password">Password</label>
                <Field name="password" type="password" className={`${formStyles.formInput} ${errors.password && touched.password && formStyles.errorInput}`} />
                <ErrorMessage name="password" component="div" className={formStyles.inputErrorMessage} />
            </div>
            <div className={formStyles.formGroup}>
                <label className={`${formStyles.label} ${errors.confirmPassword && touched.confirmPassword && formStyles.errorLabel}`} htmlFor="confirmPassword">Confirm Password</label>
                <Field name="confirmPassword" type="password" className={`${formStyles.formInput} ${errors.confirmPassword && touched.confirmPassword && formStyles.errorInput}`} />
                <ErrorMessage name="confirmPassword" component="div" className={formStyles.inputErrorMessage} />
            </div>
            <div className={formStyles.formGroup}>
                <button type="submit" className={formStyles.button} disabled={isSubmitting}>Register</button>
                <button type="reset" className={formStyles.button} >Reset</button>
                <p>{isSubmitting && `loading`}</p>
            </div>
        </Form>
    )}
</Formik>
 }

export default FormikForm
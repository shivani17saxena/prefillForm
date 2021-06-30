import React, { useState } from 'react';
import {
    Formik,
    Form, 
    Field,
    ErrorMessage,
    FieldArray,
    FastField
} from 'formik';
import * as Yup from 'yup';
//import TextError from './TextError';

const initialValues ={
    name: 'Shivani',
    email: '',
    comments: '',
    address: '',
    phoneNumber:''

}

const savedValues ={
    name: 'ShivaniS',
    email: 'xyz@example.com',
    comments: 'Welcome to React',
    address: '221b Baker Street',
    phoneNumber: '9955667788'

}

const onSubmit = (values, onSubmitProps) => {
    alert("Form Submitted")
}

const validationSchema = Yup.object({
    name: Yup.string().required()
})


function MyForm(){
    const [formValues, setFormValues] = useState(null)
    return (
        <div>
        <Formik
            initialValues={ formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {formik => {
                console.log('Formik props', formik)
                return(
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type="text" id='name' name='name' />
                            <ErrorMessage name='name' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <Field type="text" id='email' name='email' />
                            <ErrorMessage name='email' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='comments'>Comments</label>
                            <Field type="text" id='comments' name='comments' />
                            <ErrorMessage name='comments' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='address'>Address</label>
                            <Field type="text" id='address' name='address' />
                            <ErrorMessage name='address' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <Field type="text" id='phoneNumber' name='phoneNumber' />
                            <ErrorMessage name='phoneNumber' />
                        </div>
                        <button type="button" onClick={() => setFormValues(savedValues)} >Load saved data</button>
                        <button type="submit" disabled={!formik.isValid || formik.isSubmitting} >Submit</button>
                    </Form>
                )
            }}
        </Formik> 
       </div>
    )
}

export default MyForm;
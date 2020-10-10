import React from 'react';
import {useFormik} from 'formik';

interface LoginData {
    email: string;
    password: string;
}

const LoginForm = () => {
    const formik = useFormik<LoginData>({
        initialValues: {
            email: '', password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} /><br />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;
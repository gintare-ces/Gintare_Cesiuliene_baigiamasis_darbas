import { useFormik } from "formik";
import React from "react";
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import { useAuthCtx } from "../../store/AuthProvider";

function LoginForm({ onLogin }) {
  const { isLoadinng } = useAuthCtx()
  const formik =  useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be minimum 6 characters')
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      onLogin(values)
    }
  })

  return (
    <div className="w-full max-w-xs md:mt-12 ">
      <form onSubmit={formik.handleSubmit} className="backdrop-blur-lg rounded-lg px-4 pt-4 pb-4 mb-4 ">
        <div className="mb-4">
          <label className="block text-white  text-xl font-bold mb-2" htmlFor="email">
            Enter your email
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-fuchsia-500">{formik.errors.email}</div>
          ) : null}
                    
               
        </div>
        <div className="mb-8">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-fuchsia-700 border border-fuchsia-700 shadow-inner rounded w-full py-2 px-3 text-gray-700"
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-fuchsia-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-4 items-center text-center">
          <button
            disabled={isLoadinng}
            type='submit'
            className="bg-white  border-fuchsia-700 border-4 shadow-lg shadow-fuchsia-500/40 hover:bg-fuchsia-700 text-xl text-black hover:text-white font-bold py-3 px-6 rounded-full"
            >Sign In</button>
            <p className="text-white">
              Or register?
               <Link to={'/register'} className="inline-block font-bold text-xl text-fuchsia-700 border-b-4 border-fuchsia-700 ">Register here</Link>

            </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

import { useFormik } from "formik";
import React from "react";
import {Link} from "react-router-dom";

function LoginForm() {
  const formik =  useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('values ===', values);
    }
  })

  return (
    <div className="w-full max-w-xs mt-8 ">
      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border hover:border-fuchsia-700">
        <div className="mb-4">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="email">
            Enter your email
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            id="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            id="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type='submit'
            className="bg-white border-2 border-fuchsia-700 hover:bg-fuchsia-700 text-black hover:text-white font-bold py-2 px-6 rounded-full"
            >Sign In</button>
        <Link to={'/register'} className="inline-block font-bold text-lg text-fuchsia-700 underline">Register here</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

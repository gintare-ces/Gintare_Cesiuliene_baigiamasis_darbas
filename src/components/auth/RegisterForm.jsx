import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useAuthCtx } from "../../store/AuthProvider";

function RegisterForm({ onRegister }) {
  const { isLoading } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be minimum 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("values ===", values);
      onRegister(values);
    },
  });
  return (
    <div className="w-full max-w-sm md:mt-12 ">
      <form onSubmit={formik.handleSubmit} className="px-4 pt-4 pb-4 mb-4 ">
        <div className="mb-8">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="email">
            Enter your email
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="email"
            type="email"
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
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-fuchsia-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-6 items-center text-center">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-white  border-fuchsia-700 border-4 shadow-lg shadow-fuchsia-500/40 hover:bg-fuchsia-700 text-xl text-black hover:text-white font-bold py-3 px-6 rounded-full"
          >
            Register
          </button>
          <p className="text-white">
            Have account?
            <Link
              to={"/login"}
              className="inline-block font-bold text-lg text-fuchsia-500 underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

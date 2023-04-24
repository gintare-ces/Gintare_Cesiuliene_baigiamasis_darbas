import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAuthCtx } from "../../store/AuthProvider";

function AddShopForm({ onNewShop }) {
  const { user } = useAuthCtx();
  const formik = useFormik({
    initialValues: {
      shopName: "",
      town: "",
      startYear: "",
      description: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      shopName: Yup.string().min(4, "Minimum 4 characters").required("Shop name is required"),
      town: Yup.string().min(4, "Minimum 4 characters").required("Town is required"),
      startYear: Yup.number()
        .min(1970, "Years starting from 1970")
        .max(2022, "Years until 2022")
        .required("Shop years is required"),
      description: Yup.string().min(6, "Minimum 6 characters").required("Description is required"),
      imageUrl: Yup.string()
        .min(5, "Image url adress must be atleast 6 characters")
        .required("Image is required"),
    }),
    onSubmit: (values) => {
      const newShop = {
        shopName: values.shopName,
        town: values.town,
        startYear: Number(values.startYear),
        description: values.description,
        imageUrl: values.imageUrl,
        userUid: user.uid,
      };
      console.log("newShop ===", newShop);
      console.log("values ===", values);
      onNewShop(newShop);
    },
  });

  return (
    <div className="w-full max-w-xl mt-2 mx-auto">
      <form onSubmit={formik.handleSubmit} className=" px-8 pt-6 pb-8 mb-4 ">
        <h2 className="text-white text-3xl font-bold px-4 pt-10 pb-8 text-center">Add your Shop</h2>
        <div className="mb-6">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="shopName">
            Enter your Shop name
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="shopName"
            type="text"
            name="shopName"
            placeholder="Shop Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shopName}
          />
          {formik.touched.shopName && formik.errors.shopName ? (
            <div className="text-fuchsia-500">{formik.errors.shopName}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="town">
            Enter Shops town
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="town"
            type="text"
            name="town"
            placeholder="Town"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.town}
          />
          {formik.touched.town && formik.errors.town ? (
            <div className="text-fuchsia-500">{formik.errors.town}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="startYear">
            When your shop is opened?
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="startYear"
            type="text"
            name="startYear"
            placeholder="Shops start year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
          />
          {formik.touched.startYear && formik.errors.startYear ? (
            <div className="text-fuchsia-500">{formik.errors.startYear}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="description"
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-fuchsia-500">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="block text-white text-xl font-bold mb-2" htmlFor="imageUrl">
            Add image url adress
          </label>
          <input
            className="shadow-fuchsia-700 shadow-inner border border-fuchsia-700 rounded w-full py-2 px-3 text-gray-700"
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Image Url adress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className="text-fuchsia-500">{formik.errors.imageUrl}</div>
          ) : null}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white  border-fuchsia-700 border-4 shadow-lg shadow-fuchsia-700/40 hover:bg-fuchsia-900 text-xl text-black hover:text-white font-bold py-3 px-20 rounded-full"
          >
            Add Shop
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddShopForm;

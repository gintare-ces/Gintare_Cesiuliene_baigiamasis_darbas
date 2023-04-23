import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { useAuthCtx } from '../../store/AuthProvider';

function AddShopForm({ onNewShop }) {
    const { user } = useAuthCtx()
    const formik =  useFormik({
        initialValues: {
          shopName: '',
          town: '',
          startYear: '',
          description: '',
          imageUrl: '',
        },
        validationSchema: Yup.object({
          shopName: Yup.string()
            .min(4, 'Minimum 4 characters')
            .required('Shop name is required'),
          town: Yup.string()
            .min(4, 'Minimum 4 characters')
            .required('Town is required'),
          startYear: Yup.number()
            .min(1970, 'Years starting from 1970')
            .max(2022, 'Years until 2022')
            .required('Shop years is required'),
          description: Yup.string()
            .min(6, 'Minimum 6 characters')
            .required('Description is required'),
          imageUrl: Yup.string()
            .min(5, 'Image url adress must be atleast 6 characters')
            .required('Image is required')
        }),
        onSubmit: (values) => {
          const newShop = {
            shopName: values.shopName,
            town: values.town,
            startYear: Number(values.startYear),
            description: values.description,
            imageUrl: values.imageUrl,
            userUid: user.uid
          }
          console.log('newShop ===', newShop);
          console.log('values ===', values);
          onNewShop(newShop)
       
        }
    })
    return (
        <div className="w-full max-w-xl mt-10 ">
          <form onSubmit={formik.handleSubmit} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border hover:border-fuchsia-700">
            <h2 className='text-xl text-center font-bold mb-6'>Add your Shop</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="shopName">
                Enter your Shop name
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="shopName"
                type="text"
                name="shopName"
                placeholder="Shop Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shopName}
              />
              {formik.touched.shopName && formik.errors.shopName ? (
                <div>{formik.errors.shopName}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="town">
                Enter Shops town
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="town"
                type="text"
                name="town"
                placeholder="Town"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.town}
              />
              {formik.touched.town && formik.errors.town ? (
                <div>{formik.errors.town}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="startYear">
                When your shop is opened?
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="startYear"
                type="text"
                name="startYear"
                placeholder="Shops start year"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startYear}
              />
              {formik.touched.startYear && formik.errors.startYear ? (
                <div>{formik.errors.startYear}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="description"
                name="description"
                placeholder="Desxription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="imageUrl">
                Add image url adress
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="imageUrl"
                type="text"
                name="imageUrl"
                placeholder="Image Url adress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageUrl}
              />
              {formik.touched.imageUrl && formik.errors.imageUrl ? (
                <div>{formik.errors.imageUrl}</div>
              ) : null}
            </div>
            <div className="flex items-center m-auto">
              <button
                
                type='submit'
                className="bg-white border-2 border-fuchsia-700 hover:bg-fuchsia-700 text-black hover:text-white font-bold py-2 px-20 rounded-full "
                >Add Shop</button>
            
            </div>
          </form>
        </div>
      );
}

export default AddShopForm
import React from 'react';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthUser } from '../slices/auth';
import { Formik } from 'formik';
import { TextField } from '../components/TextField';

import { loginValidation } from '../helpers/formValidationSchemas';

const Login = () => {
  const { users } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-slate-700 flex items-center justify-center bg-brushed-alum">
      <div className="p-6 rounded-xl shadow-slate-500  backdrop-blur-sm bg-white bg-opacity-90 min-w-[350px] lg:min-w-[450px]">
        <h1 className="text-2xl font-bold mb-3"> Login</h1>
        <Formik
          initialValues={{ email: 'mhumbles0@vimeo.com', password: 'HQlk0Nu' }}
          validationSchema={loginValidation}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setAuthUser(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="py-4 ">
                <div className="mb-2">
                  <TextField
                    name="email"
                    type="email"
                    placeholder="email"
                    icon={<AiOutlineUser size="1.5rem" />}
                  ></TextField>
                </div>
                <div className="mb-2">
                  <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    icon={<AiOutlineUser size="1.5rem" />}
                  />
                </div>
                <fieldset className="border border-gray-300 py-1 px-2  mb-3">
                  <legend className="px-2 text-slate-700">Domain:</legend>

                  <select
                    className="w-full text-slate-800 p-2 mb-2 focus:ring-2 focus:ring-slate-300 outline-0 rounded-lg shadow-md"
                    name="domainType"
                    value={values.domainType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select Domain">
                      Select
                    </option>
                    <option value="D" label="👋" />
                    <option value="Z" label="Z" />
                  </select>
                  {errors.domainType && (
                    <small className="block text-red-600">
                      {errors.domainType}
                    </small>
                  )}
                </fieldset>
              </div>
              <div className="flex justify-end py-2">
                <button
                  type="submit"
                  className="bg-slate-700 text-white rounded-full p-5 py-2"
                >
                  Log In
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

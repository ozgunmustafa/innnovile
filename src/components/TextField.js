import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <>

        <div className="flex rounded-lg border border-gray-200">
          <span className="bg-slate-700 text-white flex items-center  justify-center p-2 rounded-l-lg">
            {props.icon}
          </span>
          <input
            className="flex-1 rounded-r-lg p-2 focus:ring-2 focus:ring-slate-300 outline-0"
            id={field.name}
            name={field.name}
            {...field}
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      

      <ErrorMessage
        component="small"
        name={field.name}
        className="text-red-600"
      />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createRecord,
  removeRecord,
  setSelectedRecord,
} from '../slices/records';
import { recordValidation } from '../helpers/formValidationSchemas';
import Layout from '../components/Layout';
import DataTable from 'react-data-table-component';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from '../components/TextField';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';

const ExpandedComponent = ({ data }) => (
  <pre className="bg-gray-50 w-full">{JSON.stringify(data, null, 2)}</pre>
);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement('body');
  });

  const showModalAndSetModalType = (type) => {
    setIsOpen(true);
    setModalType(type);
  };

  function closeModal() {
    setModalType('');
    setIsOpen(false);
    dispatch(setSelectedRecord({}));
  }
  const { data, selectedRecord } = useSelector((state) => state.records);
  const { data: technologies } = useSelector((state) => state.technologies);

  const columns = [
    {
      name: 'Id',
      selector: (row) => row.id,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Start Date',
      selector: (row) => row.start_date,
    },
    {
      name: 'End Date',
      selector: (row) => row.end_date,
    },
    {
      name: 'Created Date',
      selector: (row) => row.created_date,
    },
    {
      name: 'Operation Type',
      selector: (row) => row.operation_type,
    },
    {
      name: 'Actions',
      selector: (row) => (
        <div className="flex">
          <button
            onClick={() => {
              showModalAndSetModalType('updateRecord');
              dispatch(setSelectedRecord(row.id));
            }}
            className="mr-1 px-3 py-2 rounded-full bg-green-200 text-green-800  flex items-center"
          >
            <AiFillEdit />
            Edit
          </button>
          <button
            onClick={() => {
              showModalAndSetModalType('remove');
              dispatch(setSelectedRecord(row.id));
            }}
            className="px-3 py-2 rounded-full bg-red-100  text-red-800 flex items-center"
          >
            <AiFillDelete />
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {(modalType === 'createRecord' || modalType === 'updateRecord') &&
        modalType !== '' ? (
          <Formik
            initialValues={{
              name: selectedRecord ? selectedRecord.name : '',
              description: selectedRecord ? selectedRecord.description : '',
              start_date: selectedRecord ? selectedRecord.start_date : '',
              end_date: selectedRecord ? selectedRecord.end_date : '',
              operation_type: selectedRecord
                ? selectedRecord.operation_type
                : '',
            }}
            validationSchema={recordValidation}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              if (modalType === 'createRecord') {
                dispatch(createRecord(values));
                closeModal();
              }
              if (modalType === 'updateRecord') {
                //dispatch(createRecord(values));
              }
              console.log(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="block w-100 border border-gray-200 flex-1 rounded-lg p-2 focus:ring-2 focus:ring-slate-300 outline-0"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    className="block text-red-500"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="description"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="block w-100 border border-gray-200 flex-1 rounded-lg p-2 focus:ring-2 focus:ring-slate-300 outline-0"
                  />
                  <ErrorMessage
                    name="description"
                    component="small"
                    className="block text-red-500"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="mb-2 flex-1">
                    <label
                      htmlFor="startDate"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Başlangıç Tarihi
                    </label>
                    <Field
                      type="date"
                      name="start_date"
                      id="startDate"
                      placeholder="Description"
                      className="block w-100 border border-gray-200 flex-1 rounded-lg p-2 focus:ring-2 focus:ring-slate-300 outline-0"
                    />
                    <ErrorMessage
                      name="start_date"
                      component="small"
                      className="block text-red-500"
                    />
                  </div>
                  <div className="mb-2 flex-1">
                    <label
                      htmlFor="endDate"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bitiş Tarihi
                    </label>
                    <Field
                      type="date"
                      name="end_date"
                      id="endDate"
                      placeholder="Description"
                      className="block w-100 border border-gray-200 flex-1 rounded-lg p-2 focus:ring-2 focus:ring-slate-300 outline-0"
                    />
                    <ErrorMessage
                      name="end_date"
                      component="small"
                      className="block text-red-500"
                    />
                  </div>
                </div>
                {/**
                <div className="mb-2">
                  <Field
                    component="select"
                    id="operation_type"
                    name="operation_type"
                    className="w-full text-slate-800 p-2 mb-2 focus:ring-2 focus:ring-slate-300 outline-0 rounded-lg shadow-md"
                  >
                    <option value="">Select Operation Type</option>
                    {technologies.map((technology) => (
                      <option key={technology.id} value={technology.id}>
                        {technology.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="operation_type"
                    component="small"
                    className="block text-red-500"
                  />
                </div>
              */}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-slate-700 text-white rounded-full p-5 py-2"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          modalType === 'remove' &&
          modalType !== '' && (
            <div>
              <p className="font-2xl mb-4 font-medium">Are you sure?</p>
              <div className="flex justify-end">
                <button
                  className="bg-slate-700 text-white rounded-full p-5 py-2"
                  onClick={() => {
                    dispatch(removeRecord(selectedRecord.id));
                    closeModal();
                  }}
                >
                  Onayla
                </button>
              </div>
            </div>
          )
        )}
      </Modal>

      <div className="flex justify-end py-4">
        <button
          onClick={() => showModalAndSetModalType('createRecord')}
          className="bg-teal-400 text-teal-700 py-2 px-3 rounded-full"
        >
          Yeni Kayıt Oluştur
        </button>
      </div>

      <div>
        <DataTable
          columns={columns}
          data={data}
          defaultSortFieldId="id"
          pagination
          striped
          defaultSortAsc={false}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </Layout>
  );
};

export default Home;

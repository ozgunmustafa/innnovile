import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRecord, setSelectedRecord } from '../slices/records';
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

  console.log(technologies);

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
              showModalAndSetModalType('createOrUpdate');
              dispatch(setSelectedRecord(row.id));
            }}
            className="mr-1 px-3 py-2 rounded-full bg-green-100 flex items-center"
          >
            <AiFillEdit />
            Edit
          </button>
          <button
            onClick={() => showModalAndSetModalType('remove')}
            className="px-3 py-2 rounded-full bg-red-50 flex items-center"
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
        {modalType === 'createOrUpdate' && modalType !== '' ? (
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
              console.log(values);
              dispatch(createRecord(values));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-2">
                  <Field
                    type="text"
                    name="name"
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
                  <Field
                    type="text"
                    name="description"
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
                    <Field
                      type="date"
                      name="start_date"
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
                    <Field
                      type="date"
                      name="end_date"
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
            <p>
              Voluptate labore amet cupidatat in excepteur anim sit proident
              officia in occaecat.
            </p>
          )
        )}
      </Modal>

      <div className="flex justify-end py-4">
        <button
          onClick={() => showModalAndSetModalType('createOrUpdate')}
          className="bg-teal-200 text-teal-700 py-2 px-3 rounded-full"
        >
          Yeni Kayıt Oluştur
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(createRecord())}>Get Last</button>
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

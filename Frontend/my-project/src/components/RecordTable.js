import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecord } from '../redux/recordSlice';
import { Button } from '@mui/material';

const RecordTable = ({ setEditData }) => {
  const { records } = useSelector((state) => state.records);
  const dispatch = useDispatch();

  const columns = [
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Email', selector: (row) => row.email },
    { name: 'Contact No.', selector: (row) => row.contact },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <Button variant="contained" color="primary" onClick={() => setEditData(row)}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => dispatch(deleteRecord(row._id))}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <DataTable title="Records" columns={columns} data={records} pagination />;
};

export default RecordTable;

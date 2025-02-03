import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecords } from './redux/recordSlice';
import RecordTable from './components/RecordTable';
import RecordForm from './components/RecordForm';

const App = () => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  return (
    <div>
      <h1>CRUD App</h1>
      <RecordForm editData={editData} setEditData={setEditData} />
      <RecordTable setEditData={setEditData} />
    </div>
  );
};

export default App;

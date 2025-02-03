import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addRecord, updateRecord } from '../redux/recordSlice';
import { TextField, Button } from '@mui/material';

const RecordForm = ({ editData, setEditData }) => {
  const [form, setForm] = useState({ name: '', email: '', contact: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateRecord({ id: editData._id, data: form }));
      setEditData(null);
    } else {
      dispatch(addRecord(form));
    }
    setForm({ name: '', email: '', contact: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" fullWidth value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <TextField label="Email" fullWidth value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <TextField label="Contact" fullWidth value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} required />
      <Button type="submit" variant="contained" color="primary">{editData ? 'Update' : 'Submit'}</Button>
    </form>
  );
};

export default RecordForm;

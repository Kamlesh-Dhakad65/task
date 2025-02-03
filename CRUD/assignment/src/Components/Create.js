import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { addUser } from '../redux/UserReducer'; // Ensure correct import

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Handle empty users array
    dispatch(addUser({ id: newId, name, email })); // Dispatching action with name and email only

    navigate('/'); // Navigate to home after submission
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Add New User
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ marginBottom: 2 }} // using sx prop for margin
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ marginBottom: 2 }} // using sx prop for margin
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }} // using sx prop for margin
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Create;

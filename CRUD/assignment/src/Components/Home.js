import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { deleteUser } from '../redux/UserReducer'; // Import deleteUser action

function Home() {
  const users = useSelector((state) => state.users); // Accessing users from the Redux store
  const dispatch = useDispatch();

  // Define columns for the data grid
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
   
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Link to={`/edit/${params.row.id}`}>
            <Button variant="contained" color="success" size="small">Edit</Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ marginLeft: 1 }}
            onClick={() => handleDelete(params.row.id)} // Handle delete
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const handleDelete = (id) => {
    // Dispatch deleteUser action with the user ID to remove the user
    dispatch(deleteUser(id));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        CRUD Application
      </Typography>

      <Link to="/create">
        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
          Create New User
        </Button>
      </Link>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid 
          rows={users} 
          columns={columns} 
          pageSize={5} 
          rowsPerPageOptions={[5]} 
          checkboxSelection
        />
      </div>
    </Container>
  );
}

export default Home;

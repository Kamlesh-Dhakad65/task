import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material'
import { updateUser } from '../redux/UserReducer' // Ensure this action exists

function Update() {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Find the user based on the ID in the URL params
  const existingUser = users.find((user) => user.id === Number(id))

  const [uname, setName] = useState(existingUser ? existingUser.name : '')
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : '')

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateUser({ id: existingUser.id, name: uname, email: uemail }))
    navigate('/') // Redirect after update
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Update User
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={uname}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default Update

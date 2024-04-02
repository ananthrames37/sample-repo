import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

const HelloWorld = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center">
          Hello, AWS!
        </Typography>
      </Paper>
    </Container>
  );
};
export default HelloWorld;

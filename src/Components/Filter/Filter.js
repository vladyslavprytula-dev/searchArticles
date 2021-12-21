import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export default function Filter({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handelInputChange = e => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };
  const reset = () => {
    setInputValue('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    reset();
  };

  return (
    <>
      <Typography
        component="div"
        sx={{
          fontFamily: 'Montserrat',
          mt: '10px',
          mb: '10px',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '20px',
        }}
      >
        Filter by keywords
      </Typography>
      <Box onSubmit={handleSubmit} component="form" autoComplete="off">
        <TextField
          id="standard-basic"
          onChange={handelInputChange}
          sx={{
            boxSizing: 'border-box',
            m: 0,
            width: '600px',
            background: '#FFFFFF',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
            borderRadius: '5px',
          }}
        />
      </Box>
    </>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import firebasemethods from '../config/firebase/firebasemethods';

export default function SignUpFunction() {
    const Navigate = useNavigate()

    const SignUpToLogin =() => {
      firebasemethods.signINCreate(count)
      console.log(count)

    // Navigate("/log")

}
const [count, setCount] = useState({});
function ConsoleFunction(){
  firebasemethods.signINCreate(count)

}


  return (
      <Stack>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => {setCount({...count,name:e.target.value})}} />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => {setCount({...count,email:e.target.value})}} />
     
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => {setCount({...count,Password:e.target.value})}} type = "password" />
    


    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

<Button variant="contained" color="success" onClick={ConsoleFunction,SignUpToLogin}>
        SignUp
      </Button>
     
    </Box>

    </Stack>
  );
}


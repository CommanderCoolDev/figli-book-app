import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const AuthForm = ({ title, handleClick }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <TextField
          required
          label="Login"
          variant="outlined"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          label="Password"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={e => handleClick(login, password)}>
          {title}
        </Button>
      </div>
    </Box>
  );
};
export default AuthForm;

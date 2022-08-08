import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const AuthForm = ({ title, handleClick }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <TextField
          label="Login"
          variant="outlined"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
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

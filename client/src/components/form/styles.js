import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const FormStyle = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const FileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

const ButtonSubmit = styled(Button)({
  marginBottom: 10,
});

export { StyledPaper, FormStyle, FileInput, ButtonSubmit };

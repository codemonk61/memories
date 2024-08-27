import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppBar = styled('div')({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: "white"
});

const Heading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
});

const Image = styled('img')({
  marginLeft: '15px',
});

export { AppBar, Heading, Image };

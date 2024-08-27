import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const MainContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

const SmMargin = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const ActionDiv = styled(Grid)({
  textAlign: 'center',
});

export { MainContainer, SmMargin, ActionDiv };

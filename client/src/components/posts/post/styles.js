import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
const Media = styled(CardMedia)({
  background: `black`,
  backgroundBlendMode: 'darken',
});

const Border = styled('div')({
  border: 'solid',
});

const FullHeightCard = styled(Card)({
  height: '100%',
});

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

const Grid = styled('div')({
  display: 'flex',
});

const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

const Title = styled(Typography)({
  padding: '0 16px',
});

const CardActionsStyled = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

export {
  Media,
  Border,
  FullHeightCard,
  StyledCard,
  Overlay,
  Overlay2,
  Grid,
  Details,
  Title,
  CardActionsStyled,
};

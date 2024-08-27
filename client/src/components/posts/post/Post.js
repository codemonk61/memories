import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import moment from "moment"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';


import { deletePost, likePost } from '../../../actions/post';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const imageUrl = `https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?cs=srgb&dl=pexels-rovenimages-com-344613-949592.jpg&fm=jpg`

const Post = ({ title, creator, createdAt, tags, message, likeCount, selectedFile, _id, setCurrentId }) => {
 
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {(creator.slice(0, 1)).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => setCurrentId(_id)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={creator}
        subheader={moment(createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={selectedFile || imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {message.length > 30 ? `${message.slice(0, 30)}...` : message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(likePost(_id))}>
          <FavoriteIcon color={likeCount > 0 ? "primary" : ""} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="share" onClick={() => dispatch(deletePost(_id))}>
          <DeleteIcon fontSize="small" />
        </IconButton>

      </CardActions>
    </Card>
  )
}

export default Post
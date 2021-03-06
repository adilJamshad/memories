import React from 'react';
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core'
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from "moment";
import { useDispatch } from "react-redux"
import { deletePost, likePost } from "../../../actions/posts";
import Likes from './Likes';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost = () => {
      history.push(`/posts/${post._id}`)
    }
    return(
        <Card className={classes.card} raised elevation={6}>
          <ButtonBase  component="span" className={classes.cardAction} onClick={openPost}>

            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
              {(post.creator === user?.result?._id || post.creator === user?.result?.googleId) &&
                <div className={classes.overlay2}>
                  <Button style={{color: 'white'}} size='small' onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize='default' />
                  </Button>
                </div>
              }
                
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post?.tags?.map((tag)=> `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutter="bottom">{post?.title}</Typography>

            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" gutter="bottom">{post?.message}</Typography>
            </CardContent>
          </ButtonBase>

          <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result?.name} onClick={()=>{ dispatch(likePost(post._id))}}>
                <Likes post={post} />
              </Button>
              {(post.creator === user?.result._id || post?.creator === user?.result.googleId) &&
                <Button size="small" color="primary" onClick={()=>{ dispatch(deletePost(post._id)) }}>
                <DeleteIcon fontSize='small' />
                  Delete
                </Button>
              }
              
          </CardActions>

        </Card>
    )
}

export default Post;
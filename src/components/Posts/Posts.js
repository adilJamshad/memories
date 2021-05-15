import React from 'react';
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core"
//importing useSelector from react redux to get sliced data froms store
import { useSelector } from "react-redux";


const Posts = ({ setCurrentId }) => {
    const classes = useStyles();

    const posts = useSelector((state) => state.posts) //it takes a call back funtion, which gets posts from global store.
    //how do we know that it is posts, check reducer/index.
    return(
            !posts.length ? <CircularProgress /> :(
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        posts.map((post) => (
                            <Grid key={post._id} item xs={12} s={6}>
                                <Post  post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        ))
                    }
                </Grid>
            )
    )
}

export default Posts;
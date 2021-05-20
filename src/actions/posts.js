import * as api from "../api";
import { CREATE_POST, UPDATE_POST, FETCH_ALL, DELETE_POST, LIKE_POST, FETCH_BY_SEARCH, START_LOADING, STOP_LOADING, FETCH_POST } from "../constants/actionTypes"

//ACtion creators
export const getPosts = (page) => async (dispatch) => {

  try {
    dispatch({ type: START_LOADING})   
    //get posts from server
    const { data } = await api.fetchPosts(page);
    //dispatch an action for fetch_all. this will go to reducers to check fetch_all and do the further computations
    dispatch({ type: FETCH_ALL, payload: data});
    dispatch({ type: STOP_LOADING});
  } catch (error) {
    console.log(error.message)
  }

  //const action = { type: "FETCH_ALL", payload: [] };
  //dispatch(action)
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING})   
    //get posts from server
    const { data } = await api.fetchPost(id);
    //dispatch an action for fetch_all. this will go to reducers to check fetch_all and do the further computations
    dispatch({ type: FETCH_POST, payload: data});
    dispatch({ type: STOP_LOADING});
  } catch (error) {
    console.log(error.message)
  }
}

export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING})
    const { data: { data } } = await api.fetchPostBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data});
    dispatch({ type: STOP_LOADING});
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING})   

    const { data } = await api.createPost(post);
    history.push(`/posts/${data._id}`);
    dispatch({type: CREATE_POST, payload: data});
    dispatch({ type: STOP_LOADING});
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post); 
    dispatch({type: UPDATE_POST, payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE_POST, payload: id})
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE_POST, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}
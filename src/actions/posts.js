import * as api from "../api";
import { CREATE_POST, UPDATE_POST, FETCH_ALL, DELETE_POST, LIKE_POST } from "../constants/actionTypes"

//ACtion creators
export const getPosts = () => async (dispatch) => {

    try {
        //get posts from server
        const { data } = await api.fetchPosts();
        //dispatch an action for fetch_all. this will go to reducers to check fetch_all and do the further computations
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }

    //const action = { type: "FETCH_ALL", payload: [] };
    //dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE_POST, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); 
        dispatch({type: UPDATE_POST, payload: data})
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
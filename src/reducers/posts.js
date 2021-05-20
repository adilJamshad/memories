// a function that accepts the state and action then based on action type then do the computations

import { CREATE_POST, DELETE_POST, FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, LIKE_POST, START_LOADING, STOP_LOADING, UPDATE_POST } from "../constants/actionTypes"



export default (state = { isLoading: true, posts: [] }, action) => {
  switch(action.type){
    case FETCH_POST:
      return {...state, post: action.payload}
    case START_LOADING:
      return {...state, isLoading: true}
    case STOP_LOADING:
      return {...state, isLoading: false}
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload
      }
    case FETCH_ALL:
      return {...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      }
    case CREATE_POST:
      return {... state, posts: action.payload}
    case UPDATE_POST:
      return {...state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)}
    case LIKE_POST:
      return {...state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post)}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(post => post._id !== action.payload)}
    
    default:
      return state; 
  }
}
// a function that accepts the state and action then based on action type then do the computations

import { CREATE_POST, DELETE_POST, FETCH_ALL, LIKE_POST, UPDATE_POST } from "../constants/actionTypes"



export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE_POST:
            return [... posts, action.payload]
        case UPDATE_POST:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        case LIKE_POST:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        case DELETE_POST:
            return posts.filter(post => post._id !== action.payload)
        default:
            return posts; 
    }
}
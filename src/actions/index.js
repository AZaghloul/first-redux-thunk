import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// ASYNC ACTIONS
export const fetchPosts = () => async dispatch => {
    const responce = await jsonPlaceHolder.get('/posts');

    dispatch({type:"FETCH_POSTS",payload: responce.data});
}

export const fetchUser = (userId) => async (dispatch,getState) => {
    const responce = await jsonPlaceHolder.get(`/users/${userId}`);

    dispatch({type:"FETCH_USER" , payload:responce.data});
} 

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())

    const users = getState().posts.map(p => p.userId);
    const uniqueUsers = [];
    users.forEach(usr => {
        if(!uniqueUsers.includes(usr))
            uniqueUsers.push(usr);
    });

    uniqueUsers.forEach(usr => dispatch(fetchUser(usr)))
}
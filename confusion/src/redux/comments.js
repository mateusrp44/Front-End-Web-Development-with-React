import * as ActionTypes from './actiontypes';

export const Comments = (state = {
    errMess: null,
    comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS :
            return { ...state, isLoading: false, errMess: null, comments: action.payload };
        
        case ActionTypes.COMMENTS_FAILED :
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT :
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return { ...state, comments: state.comments.concat(comment)};
        
        default: return state;
      }
};

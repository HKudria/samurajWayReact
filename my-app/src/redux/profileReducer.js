const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

const initialState = {
        postsData: [
            {id: 1, post: 'post1', likesCount: 1},
            {id: 2, post: 'post2', likesCount: 2},
            {id: 3, post: 'post3', likesCount: 3},
            {id: 4, post: 'post4', likesCount: 4},
            {id: 5, post: 'post5', likesCount: 5},
            {id: 6, post: 'post6', likesCount: 6},
            {id: 7, post: 'post7', likesCount: 7}
        ],
        newPostText: 'test'
    }

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostCreateAction = () => ({type: ADD_POST})

export const updatePostTextCreateAction = (text) => ({type: UPDATE_POST_TEXT, newText: text})

export default profileReduce
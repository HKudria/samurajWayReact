const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const dialogsReduce = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 100,
                message: state.messageText,
            }
            state.messageData.push(newMessage)
            state.messageText = ''
            debugger
            return state
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageCreateAction = () => ({type: ADD_MESSAGE})

export const updateMessageTextCreateAction = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export default dialogsReduce
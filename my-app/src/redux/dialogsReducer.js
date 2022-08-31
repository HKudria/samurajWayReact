const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const initialState = {
    dialogsData: [
        {id: 1, name: 'name1'},
        {id: 2, name: 'name2'},
        {id: 3, name: 'name3'},
        {id: 4, name: 'name4'},
        {id: 5, name: 'name5'},
        {id: 6, name: 'name6'},
        {id: 7, name: 'name7'}
    ],
    messageData: [
        {id: 1, message: 'message1'},
        {id: 2, message: 'message2'},
        {id: 3, message: 'message3'},
        {id: 4, message: 'message4'},
        {id: 5, message: 'message5'},
        {id: 6, message: 'message6'},
        {id: 7, message: 'message7'}
    ],
    messageText: ''
}

const dialogsReduce = (state = initialState, action) => {
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
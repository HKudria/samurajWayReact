import profileReducer from "./profileReducer";
import dialogsReduce from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Denis', avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large'},
                {
                    id: 2,
                    name: 'Vasyl',
                    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
                },
                {
                    id: 3,
                    name: 'Natalia',
                    avatar: 'https://abrakadabra.fun/uploads/posts/2022-03/1647673108_1-abrakadabra-fun-p-anime-avatarka-dlya-devushki-estetika-7.png'
                }
            ]
        }
    },
    _subscriber() {
        console.log('test')
    },
    setSubscriber(observer) {
        this._subscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._subscriber(this._state)
    }
}

export default store
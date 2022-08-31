const initialState = {
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

const sidebarReduce = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sidebarReduce
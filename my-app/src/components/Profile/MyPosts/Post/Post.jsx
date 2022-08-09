import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    return (
         <div className={s.item}>
            <img src='https://s1.1zoom.ru/prev/577/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_600x400.jpg'
                 alt='test'/>
             {props.message}
            <div>
                <span>likes : {props.likes}</span>
            </div>
        </div>
    )
}

export default Post
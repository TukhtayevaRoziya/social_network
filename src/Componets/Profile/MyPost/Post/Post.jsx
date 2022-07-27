import React from 'react'

import moduleName from './Post.module.css'
import UserImg from '../../../../TRZ.png'

export const Post = ({ post, likesCount }) => {
    return (
        <div className={moduleName.Post}>
            <div className={moduleName.Message}>
                <img src={UserImg} alt="" />
            </div>
            <div>{post}</div>
            <br />
            <div>{likesCount}</div>
        </div>
    )
}


import React from 'react'
import { connect } from 'react-redux'

import { MyPost } from './MyPost'
import { actions } from '../../../Redux/ProfileReduser'

const SendPost = actions.SendPostAC

const MyPostContainer = (props) => {
    let onAddPost = (newPostData) => {
        props.SendPost(newPostData)
    }

    return <MyPost onAddPost={onAddPost} posts={props.posts}/>
}

let mapStateToProps = (state) => ({
    posts: state.ProfilePage.postData
})

export default connect(mapStateToProps, { SendPost })(MyPostContainer)

import { reduxForm } from 'redux-form'

import { Post } from './Post/Post'
import moduleName from './MyPost.module.css'
import { AddNewPostForm } from './AddNewPostForm/AddNewPostForm'

const MyPostReduxForm = reduxForm({ form: "Profile" })(AddNewPostForm)

export const MyPost = ({ onAddPost, posts }) => {
    
    const onSubmit = (values) => {
        onAddPost(values.newPostData)
    }

    let MyPostMap = [...posts].reverse().map(m => <Post key={m.id} post={m.post} likesCount={m.likesCount} />)

    return <>
        <div className="MyPost">
            <h1 className={moduleName.title}>My posts</h1>
        </div>
        <MyPostReduxForm onSubmit={onSubmit} />  
        {MyPostMap}
    </>
}

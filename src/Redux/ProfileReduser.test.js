import ProfileReduser, { SendPostAC } from './ProfileReduser'

test('renders learn react link', () => {
    const state = {
        postData: [
            { id: 1, post: "bla-bla", likesCount: "👍 11" },
            { id: 2, post: "bla-bla", likesCount: "👍 11" },
            { id: 3, post: "bla-bla", likesCount: "👍 11" },
            { id: 4, post: "bla-bla", likesCount: "👍 11" },
        ]
    }
    let action = SendPostAC("Hello! My name is Roziyabegim!!!")
    let newState = ProfileReduser(state,action)
    expect(newState.postData.length).toBe(5)
});

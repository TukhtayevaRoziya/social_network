export type PostDataType = {
    id: number
    post: string 
    likesCount: string | number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small?: string | null
    large?: string | null
}

export type ProfileType = {
    userId?: number | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | undefined; 
    fullName?: string | undefined
    contacts?: ContactsType[] | undefined;
    photos?: PhotosType
}

export type UsersType = {
    id: number
    name: string
    status?: string 
    photos?: PhotosType 
}
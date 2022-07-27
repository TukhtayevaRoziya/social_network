import { instance, APIResponseType } from './Api'

import { PhotosType, ProfileType } from '../types/types'

type SavePhotosType = {
    photos: PhotosType
}

export const profileApi = {
    async getProfile(userId: number) {
        const response = await instance.get<ProfileType>(`profile/${userId}`);
        return response.data;
    },
    async getStatus(userId: number) {
        const response = await instance.get(`profile/status/` + userId);
        return response.data;
    },
    upDateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, { status: status })
            .then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<APIResponseType<SavePhotosType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile)
            .then(response => response.data);
    }
};

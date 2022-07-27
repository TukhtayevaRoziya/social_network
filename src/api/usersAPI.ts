import { AxiosPromise } from 'axios'
import { UsersType } from '../types/types'
import { instance, APIResponseType } from './Api'

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string
}

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data) as AxiosPromise<APIResponseType>;
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => response.data) as AxiosPromise<APIResponseType>;
    }
};

import { instance, APIResponseType } from './Api'

export type MeResponseType = {
    id: number
    email: string
    login: string
}

export const authApi = {
    async me() {
        const response = await instance.get<APIResponseType<MeResponseType>>(`auth/me`);
        return response.data;
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post<APIResponseType<{userId: number}>>(`auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },
    logout() {
        return instance.delete<APIResponseType>(`auth/login`)
            .then(response => response.data);
    }
};

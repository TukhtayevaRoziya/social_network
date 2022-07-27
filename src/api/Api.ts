import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "690bb222-c427-446f-a32e-17570f11a7d0"
    }
})

export enum ResultCodesTypeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaTypeEnum {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodesTypeEnum | ResultCodeForCaptchaTypeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
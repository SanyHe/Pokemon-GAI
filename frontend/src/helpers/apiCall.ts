import { getData, postData } from "./apiCallWrappers";


export const postRegister = async (username: string, password: string, email: string) => {
    const params = {
        username: username,
        password: password,
        email: email
    };
    const response = await postData("/register", null, params);
    return response;
};


export const postLogin = async (email: string, password: string) => {
    const params = {
        email: email,
        password: password
    };
    const response = await postData("/login", null, params);
    return response;
};


export const getProfile = async (userID: string) => {
    const params = {
        userID: userID
    };
    const response = await getData("/profile", params);
    return response;
};


export const postProfileInfo = async (userID: string, age?: number, role?: string, like?: string, motto?: string, contact?: string) => {
    const payload = {
        info: 
        {
            age: age,
            role: role,
            like: like,
            motto: motto,
            contact: contact
        } 
    };
    const params = {
        userID: userID,
    };
    const response = await postData("/profile/info", payload, params);
    return response;
};


export const postProfileAvatar = async (userID: string, avatar: string) => {
    const payload = {
        userID: userID,
        avatar: avatar
    };
    const response = await postData("/profile/avatar", payload);
    return response;
};

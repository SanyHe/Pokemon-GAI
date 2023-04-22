import { getDataParam, getDataJSON, postDataParam, postDataJSON } from "./apiCallWrappers";


export const postRegister = async (username: string, password: string, email: string) => {
    const payload = {
        username: username,
        password: password,
        email: email
    };
    const response = await postDataParam("/register", payload);
    return response;
};


export const postLogin = async (email: string, password: string) => {
    const payload = {
        email: email,
        password: password
    };
    const response = await postDataParam("/login", payload);
    return response;
};


export const getProfile = async (userID: string) => {
    const payload = {
        userID: userID
    };
    const response = await getDataJSON("/profile", payload);
    return response;
};


export const postProfileInfo = async (userID: string, age?: number, role?: string, like?: string, motto?: string, contact?: string) => {
    const payload = {
        userID: userID,
        age: age,
        role: role,
        like: like,
        motto: motto,
        contact: contact
    };
    const response = await postDataJSON("/profile/info", payload);
    return response;
};


export const postProfileAvatar = async (userID: string, avatar: string) => {
    const payload = {
        userID: userID,
        avatar: avatar
    };
    const response = await postDataJSON("/profile/avatar", payload);
    return response;
};

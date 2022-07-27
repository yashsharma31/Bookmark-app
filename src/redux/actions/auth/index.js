export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN =(authConstants)=> {
    return{
        type:authConstants.LOGIN_REDUX
    }
}
export const LOGOUT =(authConstants)=> {
    return{
        type:authConstants.LOGOUT_REDUX
    }
}
export const SIGNIN =(authConstants)=> {
    return{
        type:authConstants.SIGNIN_REDUX
    }
}
export const GETME =(authConstants)=> {
    return{
        type:authConstants.GETME_REDUX
    }
}
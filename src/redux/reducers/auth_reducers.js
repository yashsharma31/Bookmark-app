import { authConstants} from '../../constants/index'
const initialState = {
    userName: '',
    email: '',
}
const auth_reducers = (state=initialState, actions) => {
    switch (actions.type) {
        case authConstants.LOGIN_REDUX:
            console.log("user redux login")
            return state;
        case authConstants.LOGOUT_REDUX:
            console.log("user redux logout")
            return state;
        case authConstants.SIGNIN_REDUX:
            console.log("user redux signin")
            return state;
        case authConstants.GETME_REDUX:
            console.log("user redux get")
            return state;
        default:
            return state;
    }
}

export default auth_reducers;
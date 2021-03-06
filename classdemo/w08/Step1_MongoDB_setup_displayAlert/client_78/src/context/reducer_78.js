import { CLEAR_ALERT, DISPLAY_ALERT } from "./action_78"

const reducer_78 = (state, action) => {

    if(action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert: true,
            alertText: 'please provide all values',
            alertType: 'danger'
        }
    }

    if(action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertType: ''
        }
    }

    throw new Error(`no such action: ${action.type}`)

}

export default reducer_78;
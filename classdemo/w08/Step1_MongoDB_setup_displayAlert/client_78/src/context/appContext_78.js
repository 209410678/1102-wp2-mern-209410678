import React,{ useReducer, useContext} from 'react';

import reducer_78 from './reducer_78';

import { DISPLAY_ALERT, CLEAR_ALERT } from './action_78';

const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: ''
}

const AppContext_78 = React.createContext();

const AppProvider_78 = ( {children}) => {

    const [state, dispatch] = useReducer(reducer_78, initialState);

    const displayAlert = () => {
        dispatch( {type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout( ()=>{
            dispatch( {type: CLEAR_ALERT });
        }, 3000);
    }
    return (
        <AppContext_78.Provider value={ {...state, displayAlert, clearAlert} }>
            {children}
        </AppContext_78.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext_78);
}

export { AppProvider_78, initialState, useAppContext}
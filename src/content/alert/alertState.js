import React, { useReducer } from "react"
import AlertContent from "./alertContent"
import AlertReducer from "./alertReducer"
import { SET_ALERT, REMOVE_ALERT } from "./types"

const AlertState = props => {   /*初始化状态*/
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)   /*把默认值提交到那个reduce*/

    const AlertShow = (msg, type) => {
        dispatch({type: SET_ALERT, payLoad: {msg, type}})
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 2000)
    }

    return (
        <AlertContent.Provider value={{alert: state, AlertShow}}>
            {props.children}
        </AlertContent.Provider>
    )
}

export default AlertState